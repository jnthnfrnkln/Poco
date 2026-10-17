(() => {
  const POCO = [-45.2579, -23.7619];
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------- Earth fly-in ---------------- */
  const fly = document.querySelector('.fly');
  const flyVideo = document.getElementById('flyVideo');
  const bar = document.getElementById('flyBar');
  const caps = [...document.querySelectorAll('.cap')];

  // Camera keyframes, positioned along the scroll of the fly section (0..1)
  const KF = [
    { at: 0.06, c: [-28, -12],          z: 1.25, pitch: 0,  bearing: 0 },
    { at: 0.30, c: [-45.9, -23.6],      z: 6.6,  pitch: 0,  bearing: 0 },
    { at: 0.52, c: [-45.31, -23.87],    z: 10.1, pitch: 32, bearing: -8 },
    { at: 0.72, c: [-45.262, -23.766],  z: 13.6, pitch: 62, bearing: -70 },
    { at: 0.86, c: [-45.2592, -23.7621], z: 15.3, pitch: 72, bearing: -88 }
  ];
  const CAPS = [[0, 0.12], [0.18, 0.36], [0.42, 0.6], [0.64, 0.79], [0.84, 1.01]];
  const VIDEO_FADE = [0.87, 0.97];

  const ease = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const lerp = (a, b, t) => a + (b - a) * t;
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

  function cameraAt(p) {
    if (p <= KF[0].at) return KF[0];
    for (let i = 0; i < KF.length - 1; i++) {
      const a = KF[i], b = KF[i + 1];
      if (p <= b.at) {
        const t = ease((p - a.at) / (b.at - a.at));
        return {
          c: [lerp(a.c[0], b.c[0], t), lerp(a.c[1], b.c[1], t)],
          z: lerp(a.z, b.z, t), pitch: lerp(a.pitch, b.pitch, t), bearing: lerp(a.bearing, b.bearing, t)
        };
      }
    }
    return KF[KF.length - 1];
  }

  function scrollProgress() {
    const r = fly.getBoundingClientRect();
    return clamp(-r.top / (r.height - innerHeight));
  }

  let map = null, marker = null;

  function initMap() {
    if (!window.maplibregl) return false;
    try {
      map = new maplibregl.Map({
        container: 'map',
        interactive: false,
        attributionControl: { compact: true },
        center: KF[0].c, zoom: KF[0].z,
        maxPitch: 80,
        style: {
          version: 8,
          projection: { type: 'globe' },
          sky: {
            'sky-color': '#8fb8e0', 'horizon-color': '#dfeaf2', 'fog-color': '#cfe0ec',
            'sky-horizon-blend': 0.6, 'horizon-fog-blend': 0.6, 'fog-ground-blend': 0.7,
            'atmosphere-blend': ['interpolate', ['linear'], ['zoom'], 0, 1, 7, 1, 10, 0]
          },
          sources: {
            sat: {
              type: 'raster', tileSize: 256, maxzoom: 18,
              tiles: ['https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'],
              attribution: 'Imagery © Esri, Maxar, Earthstar Geographics'
            },
            dem: {
              type: 'raster-dem', encoding: 'terrarium', tileSize: 256, maxzoom: 13,
              tiles: ['https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png'],
              attribution: 'Terrain: Mapzen / AWS'
            }
          },
          layers: [
            { id: 'bg', type: 'background', paint: { 'background-color': '#02060c' } },
            { id: 'sat', type: 'raster', source: 'sat', paint: { 'raster-saturation': 0.1, 'raster-contrast': 0.08 } }
          ]
        }
      });
    } catch (e) {
      return false;
    }

    map.on('load', () => { try { map.setTerrain({ source: 'dem', exaggeration: 1.35 }); } catch (e) {} });

    const el = document.createElement('div');
    el.className = 'pin';
    el.innerHTML = '<div class="pin__in"><span></span><b>Poço</b></div>';
    marker = new maplibregl.Marker({ element: el, anchor: 'center' }).setLngLat(POCO).addTo(map);
    return true;
  }

  const hasMap = !reduceMotion && initMap();
  if (!hasMap) fly.classList.add('nomap');

  let smooth = scrollProgress();
  let lastCap = -1;

  function frame() {
    requestAnimationFrame(frame);
    const target = scrollProgress();
    smooth += (target - smooth) * 0.09;
    if (Math.abs(target - smooth) < 0.0002) smooth = target;
    const p = smooth;

    bar.style.height = (p * 100) + '%';

    // captions
    let cap = -1;
    CAPS.forEach(([a, b], i) => { if (p >= a && p < b) cap = i; });
    if (cap !== lastCap) {
      caps.forEach((c, i) => c.classList.toggle('on', i === cap));
      lastCap = cap;
    }

    if (map) {
      const cam = cameraAt(p);
      try { map.jumpTo({ center: cam.c, zoom: cam.z, pitch: cam.pitch, bearing: cam.bearing }); } catch (e) {}
      marker.getElement().firstChild.style.opacity = clamp((p - 0.55) / 0.08) * (1 - clamp((p - 0.84) / 0.03));

      const v = clamp((p - VIDEO_FADE[0]) / (VIDEO_FADE[1] - VIDEO_FADE[0]));
      flyVideo.style.opacity = v;
      if (v > 0 && flyVideo.paused) flyVideo.play().catch(() => {});
      if (v === 0 && !flyVideo.paused) flyVideo.pause();
    } else if (flyVideo.paused) {
      flyVideo.play().catch(() => {});
    }
  }
  requestAnimationFrame(frame);

  document.getElementById('skip').addEventListener('click', () => {
    document.getElementById('manifesto').scrollIntoView({ behavior: 'smooth' });
  });

  /* ---------------- Nav ---------------- */
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('solid', fly.getBoundingClientRect().bottom < 80);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------------- Reveal on scroll ---------------- */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  /* ---------------- Count-up ---------------- */
  const cio = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, end = +el.dataset.count, t0 = performance.now();
      const tick = now => {
        const t = clamp((now - t0) / 1600);
        el.textContent = Math.round(end * (1 - Math.pow(1 - t, 3)));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      cio.unobserve(el);
    });
  }, { threshold: 0.6 });
  if (!reduceMotion) document.querySelectorAll('[data-count]').forEach(el => { el.textContent = '0'; cio.observe(el); });

  /* ---------------- Autoplay videos in view ---------------- */
  const vio = new IntersectionObserver(entries => {
    entries.forEach(e => e.isIntersecting ? e.target.play().catch(() => {}) : e.target.pause());
  }, { threshold: 0.25 });
  document.querySelectorAll('video[data-autoplay]').forEach(v => vio.observe(v));

  const film = document.querySelector('.film');
  const filmVideo = film.querySelector('video');
  // Skip the porch shot at the start of the film for the silent background loop
  filmVideo.addEventListener('loadedmetadata', () => { if (!film.classList.contains('playing')) filmVideo.currentTime = 8; }, { once: true });
  document.getElementById('playFilm').addEventListener('click', () => {
    film.classList.add('playing');
    filmVideo.currentTime = 0;
    filmVideo.controls = true;
    filmVideo.play();
  });

  /* ---------------- Contact form ---------------- */
  document.querySelectorAll('[data-pick]').forEach(a => a.addEventListener('click', () => {
    document.getElementById('interest').value = a.dataset.pick;
  }));
  document.getElementById('form').addEventListener('submit', e => {
    e.preventDefault();
    // TODO: connect to a form backend (Formspree, Resend, etc.). For now, opens the visitor's mail client.
    const f = new FormData(e.target);
    const body = `${f.get('message')}\n\n— ${f.get('name')} (${f.get('email')})`;
    location.href = `mailto:contato@pocoilhabela.com?subject=${encodeURIComponent('Poço — ' + f.get('interest'))}&body=${encodeURIComponent(body)}`;
    document.getElementById('formOk').hidden = false;
  });
})();
