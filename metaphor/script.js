document.addEventListener('DOMContentLoaded', function() {
  // Initialize animations
  initializeAnimations();
  
  // Set up scroll animations
  setupScrollAnimations();
  
  // Set up house animation and interactions
  setupHouseAnimation();
  
  // Set up tooltips
  setupTooltips();
  
  // Initialize comparison chart
  setupComparisonChart();
  
  // Initialize quiz functionality
  setupQuiz();
  
  // Setup recipe cards
  setupRecipeCards();
  
  // Setup buttons
  setupButtons();
});

function initializeAnimations() {
  // Animate header elements
  gsap.from("header h1", { 
    opacity: 0, 
    y: -50, 
    duration: 1, 
    ease: "power3.out" 
  });
  
  gsap.from("header .subtitle", { 
    opacity: 0, 
    y: -30, 
    duration: 1, 
    delay: 0.3, 
    ease: "power3.out" 
  });

  // Add animated icons to cards
  setupCardIcons();
  
  // Add animated icons to guide items
  setupGuideIcons();
  
  // Add animated icons to sequence
  setupSequenceIcons();
}

function setupCardIcons() {
  const iconContainers = [
    { id: 'wet-icon', icon: '<div class="water-drop animated"></div>' },
    { id: 'phlegm-icon', icon: '<div class="oil-blob animated"></div>' },
    { id: 'stasis-icon', icon: '<div class="blockage animated"></div>' },
    { id: 'deficiency-icon', icon: '<div class="pump animated"></div>' }
  ];
  
  iconContainers.forEach(container => {
    const element = document.getElementById(container.id);
    if (element) {
      element.innerHTML = container.icon;
    }
  });
  
  // Add enhanced CSS for the icons
  const style = document.createElement('style');
  style.textContent = `
    .animated {
      position: relative;
      z-index: 2;
    }
    
    .water-drop {
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, #4fd1c7, #38b2ac);
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      position: relative;
      filter: drop-shadow(0 0 15px rgba(77, 209, 199, 0.6));
      animation: pulse 2s ease-in-out infinite;
    }
    
    .water-drop::after {
      content: "";
      position: absolute;
      top: 8px;
      left: 8px;
      width: 15px;
      height: 15px;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4));
      border-radius: 50%;
      opacity: 0.9;
    }
    
    .oil-blob {
      width: 60px;
      height: 40px;
      background: linear-gradient(135deg, #fbb040, #ed8936);
      border-radius: 50%;
      position: relative;
      overflow: hidden;
      filter: drop-shadow(0 0 15px rgba(251, 176, 64, 0.6));
      animation: wobble 3s ease-in-out infinite;
    }
    
    .oil-blob::before {
      content: "";
      position: absolute;
      top: -15px;
      left: 15px;
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1));
      border-radius: 50%;
    }
    
    .blockage {
      width: 60px;
      height: 40px;
      background: linear-gradient(135deg, #f56565, #e53e3e);
      position: relative;
      clip-path: polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%);
      filter: drop-shadow(0 0 15px rgba(245, 101, 101, 0.6));
      animation: shake 2s ease-in-out infinite;
    }
    
    .blockage::after {
      content: "";
      position: absolute;
      top: 8px;
      left: 20px;
      width: 25px;
      height: 4px;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 2px;
      box-shadow: 0 10px 0 rgba(0, 0, 0, 0.3), 0 20px 0 rgba(0, 0, 0, 0.3);
    }
    
    .pump {
      width: 50px;
      height: 50px;
      border: 6px solid #9f7aea;
      border-radius: 50%;
      position: relative;
      background: linear-gradient(135deg, rgba(159, 122, 234, 0.2), rgba(128, 90, 213, 0.2));
      filter: drop-shadow(0 0 15px rgba(159, 122, 234, 0.6));
    }
    
    .pump::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 25px;
      height: 25px;
      background: linear-gradient(135deg, #9f7aea, #805ad5);
      border-radius: 50%;
      animation: powerPulse 1.5s infinite;
      box-shadow: 0 0 20px rgba(159, 122, 234, 0.8);
    }
    
    @keyframes pulse {
      0%, 100% { transform: rotate(-45deg) scale(1); }
      50% { transform: rotate(-45deg) scale(1.1); }
    }
    
    @keyframes wobble {
      0%, 100% { transform: rotate(0deg); }
      25% { transform: rotate(2deg); }
      75% { transform: rotate(-2deg); }
    }
    
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-2px); }
      75% { transform: translateX(2px); }
    }
    
    @keyframes powerPulse {
      0% { transform: translate(-50%, -50%) scale(0.8); opacity: 1; }
      50% { transform: translate(-50%, -50%) scale(1.3); opacity: 0.7; }
      100% { transform: translate(-50%, -50%) scale(0.8); opacity: 1; }
    }
  `;
  document.head.appendChild(style);
}

function setupGuideIcons() {
  const guideIcons = [
    { id: 'diet', icon: '🍲' },
    { id: 'exercise', icon: '🏃' },
    { id: 'emotion', icon: '😌' },
    { id: 'rest', icon: '😴' }
  ];
  
  guideIcons.forEach(item => {
    const element = document.querySelector(`#${item.id} .guide-icon`);
    if (element) {
      element.innerHTML = `<span style="font-size: 2rem;">${item.icon}</span>`;
    }
  });
}

function setupSequenceIcons() {
  const sequenceIcons = [
    { id: 'icon1', icon: '⚙️' },
    { id: 'icon2', icon: '💧' },
    { id: 'icon3', icon: '🧪' },
    { id: 'icon4', icon: '🚫' }
  ];
  
  sequenceIcons.forEach(item => {
    const element = document.getElementById(item.id);
    if (element) {
      element.innerHTML = `<span style="font-size: 2rem;">${item.icon}</span>`;
    }
  });
}

function setupScrollAnimations() {
  // Get all cards and other elements to animate
  const elements = document.querySelectorAll('.card, .guide-item, .sequence-item, .final-thoughts');
  
  // Create an observer for scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  // Observe each element
  elements.forEach(element => {
    observer.observe(element);
  });
}

function setupHouseAnimation() {
  // Create a house with plumbing animation using Lottie
  // We'll create a simple animation of a house with visible plumbing
  const houseAnimation = {
    container: document.getElementById('house-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: {
      v: "5.7.12",
      fr: 30,
      ip: 0,
      op: 90,
      w: 800,
      h: 400,
      nm: "House Plumbing",
      ddd: 0,
      assets: [],
      layers: [
        {
          ddd: 0,
          ind: 1,
          ty: 4,
          nm: "House",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [400, 220, 0], ix: 2, l: 2 },
            a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 }
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [300, 200], ix: 2 },
                  p: { a: 0, k: [0, 30], ix: 3 },
                  r: { a: 0, k: 0, ix: 4 },
                  nm: "House Body",
                  mn: "ADBE Vector Shape - Rect",
                  hd: false
                },
                {
                  ty: "sh",
                  d: 1,
                  ks: {
                    a: 0,
                    k: {
                      i: [[0, 0], [0, 0], [0, 0]],
                      o: [[0, 0], [0, 0], [0, 0]],
                      v: [[-150, -70], [0, -150], [150, -70]],
                      c: true
                    },
                    ix: 2
                  },
                  nm: "Roof",
                  mn: "ADBE Vector Shape - Group",
                  hd: false
                },
                {
                  ty: "fl",
                  c: { a: 0, k: [0.94, 0.82, 0.8, 1], ix: 4 },
                  o: { a: 0, k: 100, ix: 5 },
                  r: 1,
                  bm: 0,
                  nm: "Fill 1",
                  mn: "ADBE Vector Graphic - Fill",
                  hd: false
                }
              ],
              nm: "House Structure",
              np: 3,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false
            }
          ],
          ip: 0,
          op: 90,
          st: 0,
          bm: 0
        },
        {
          ddd: 0,
          ind: 2,
          ty: 4,
          nm: "Pipes",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [400, 220, 0], ix: 2, l: 2 },
            a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 }
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ty: "path",
                  d: {
                    a: 0,
                    k: "M-120,130 C-120,130 -120,30 -120,30 C-120,30 0,30 0,30 C0,30 0,130 0,130",
                    ix: 2
                  },
                  nm: "Pipe Path",
                  mn: "ADBE Vector Shape - Group",
                  hd: false
                },
                {
                  ty: "st",
                  c: { a: 0, k: [0.29, 0.53, 0.31, 1], ix: 3 },
                  o: { a: 0, k: 100, ix: 4 },
                  w: { a: 0, k: 10, ix: 5 },
                  lc: 2,
                  lj: 1,
                  ml: 4,
                  bm: 0,
                  nm: "Pipe Stroke",
                  mn: "ADBE Vector Graphic - Stroke",
                  hd: false
                }
              ],
              nm: "Main Pipe",
              np: 2,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false
            },
            {
              ty: "gr",
              it: [
                {
                  ty: "path",
                  d: {
                    a: 0,
                    k: "M0,30 C0,30 120,30 120,30 C120,30 120,130 120,130",
                    ix: 2
                  },
                  nm: "Pipe Path 2",
                  mn: "ADBE Vector Shape - Group",
                  hd: false
                },
                {
                  ty: "st",
                  c: { a: 0, k: [0.29, 0.53, 0.31, 1], ix: 3 },
                  o: { a: 0, k: 100, ix: 4 },
                  w: { a: 0, k: 10, ix: 5 },
                  lc: 2,
                  lj: 1,
                  ml: 4,
                  bm: 0,
                  nm: "Pipe Stroke",
                  mn: "ADBE Vector Graphic - Stroke",
                  hd: false
                }
              ],
              nm: "Second Pipe",
              np: 2,
              cix: 2,
              bm: 0,
              ix: 2,
              mn: "ADBE Vector Group",
              hd: false
            }
          ],
          ip: 0,
          op: 90,
          st: 0,
          bm: 0
        },
        {
          ddd: 0,
          ind: 3,
          ty: 4,
          nm: "Water Flow",
          sr: 1,
          ks: {
            o: { a: 0, k: 80, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [400, 220, 0], ix: 2, l: 2 },
            a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 }
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ty: "path",
                  d: {
                    a: 1,
                    k: [
                      {
                        i: { x: 0.667, y: 1 },
                        o: { x: 0.333, y: 0 },
                        t: 0,
                        s: [
                          {
                            i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                            o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                            v: [[-110, 30], [-100, 30], [-100, 40], [-110, 40]],
                            c: true
                          }
                        ]
                      },
                      {
                        i: { x: 0.667, y: 1 },
                        o: { x: 0.333, y: 0 },
                        t: 15,
                        s: [
                          {
                            i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                            o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                            v: [[-110, 60], [-100, 60], [-100, 70], [-110, 70]],
                            c: true
                          }
                        ]
                      },
                      {
                        i: { x: 0.667, y: 1 },
                        o: { x: 0.333, y: 0 },
                        t: 30,
                        s: [
                          {
                            i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                            o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                            v: [[-110, 90], [-100, 90], [-100, 100], [-110, 100]],
                            c: true
                          }
                        ]
                      },
                      {
                        t: 45,
                        s: [
                          {
                            i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                            o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                            v: [[-110, 130], [-100, 130], [-100, 140], [-110, 140]],
                            c: true
                          }
                        ]
                      }
                    ],
                    ix: 2
                  },
                  nm: "Water Drop Path",
                  mn: "ADBE Vector Shape - Group",
                  hd: false
                },
                {
                  ty: "fl",
                  c: { a: 0, k: [0.29, 0.53, 0.74, 1], ix: 4 },
                  o: { a: 0, k: 100, ix: 5 },
                  r: 1,
                  bm: 0,
                  nm: "Water Fill",
                  mn: "ADBE Vector Graphic - Fill",
                  hd: false
                }
              ],
              nm: "Water Drop 1",
              np: 2,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false
            },
            {
              ty: "gr",
              it: [
                {
                  ty: "path",
                  d: {
                    a: 1,
                    k: [
                      {
                        i: { x: 0.667, y: 1 },
                        o: { x: 0.333, y: 0 },
                        t: 10,
                        s: [
                          {
                            i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                            o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                            v: [[110, 30], [120, 30], [120, 40], [110, 40]],
                            c: true
                          }
                        ]
                      },
                      {
                        i: { x: 0.667, y: 1 },
                        o: { x: 0.333, y: 0 },
                        t: 25,
                        s: [
                          {
                            i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                            o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                            v: [[110, 60], [120, 60], [120, 70], [110, 70]],
                            c: true
                          }
                        ]
                      },
                      {
                        i: { x: 0.667, y: 1 },
                        o: { x: 0.333, y: 0 },
                        t: 40,
                        s: [
                          {
                            i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                            o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                            v: [[110, 90], [120, 90], [120, 100], [110, 100]],
                            c: true
                          }
                        ]
                      },
                      {
                        t: 55,
                        s: [
                          {
                            i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                            o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                            v: [[110, 130], [120, 130], [120, 140], [110, 140]],
                            c: true
                          }
                        ]
                      }
                    ],
                    ix: 2
                  },
                  nm: "Water Drop Path 2",
                  mn: "ADBE Vector Shape - Group",
                  hd: false
                },
                {
                  ty: "fl",
                  c: { a: 0, k: [0.29, 0.53, 0.74, 1], ix: 4 },
                  o: { a: 0, k: 100, ix: 5 },
                  r: 1,
                  bm: 0,
                  nm: "Water Fill",
                  mn: "ADBE Vector Graphic - Fill",
                  hd: false
                }
              ],
              nm: "Water Drop 2",
              np: 2,
              cix: 2,
              bm: 0,
              ix: 2,
              mn: "ADBE Vector Group",
              hd: false
            },
            {
              ty: "gr",
              it: [
                {
                  ty: "path",
                  d: {
                    a: 1,
                    k: [
                      {
                        i: { x: 0.667, y: 1 },
                        o: { x: 0.333, y: 0 },
                        t: 20,
                        s: [
                          {
                            i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                            o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                            v: [[-10, 30], [10, 30], [10, 40], [-10, 40]],
                            c: true
                          }
                        ]
                      },
                      {
                        i: { x: 0.667, y: 1 },
                        o: { x: 0.333, y: 0 },
                        t: 35,
                        s: [
                          {
                            i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                            o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                            v: [[-10, 60], [10, 60], [10, 70], [-10, 70]],
                            c: true
                          }
                        ]
                      },
                      {
                        i: { x: 0.667, y: 1 },
                        o: { x: 0.333, y: 0 },
                        t: 50,
                        s: [
                          {
                            i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                            o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                            v: [[-10, 90], [10, 90], [10, 100], [-10, 100]],
                            c: true
                          }
                        ]
                      },
                      {
                        t: 65,
                        s: [
                          {
                            i: [[0, 0], [0, 0], [0, 0], [0, 0]],
                            o: [[0, 0], [0, 0], [0, 0], [0, 0]],
                            v: [[-10, 130], [10, 130], [10, 140], [-10, 140]],
                            c: true
                          }
                        ]
                      }
                    ],
                    ix: 2
                  },
                  nm: "Water Drop Path 3",
                  mn: "ADBE Vector Shape - Group",
                  hd: false
                },
                {
                  ty: "fl",
                  c: { a: 0, k: [0.29, 0.53, 0.74, 1], ix: 4 },
                  o: { a: 0, k: 100, ix: 5 },
                  r: 1,
                  bm: 0,
                  nm: "Water Fill",
                  mn: "ADBE Vector Graphic - Fill",
                  hd: false
                }
              ],
              nm: "Water Drop 3",
              np: 2,
              cix: 2,
              bm: 0,
              ix: 3,
              mn: "ADBE Vector Group",
              hd: false
            }
          ],
          ip: 0,
          op: 90,
          st: 0,
          bm: 0
        },
        {
          ddd: 0,
          ind: 4,
          ty: 4,
          nm: "Blockage",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [400, 220, 0], ix: 2, l: 2 },
            a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 }
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ty: "el",
                  p: { a: 0, k: [-60, 80], ix: 3 },
                  s: { 
                    a: 1, 
                    k: [
                      {
                        i: { x: [0.667, 0.667], y: [1, 1] },
                        o: { x: [0.333, 0.333], y: [0, 0] },
                        t: 0,
                        s: [15, 15]
                      },
                      {
                        i: { x: [0.667, 0.667], y: [1, 1] },
                        o: { x: [0.333, 0.333], y: [0, 0] },
                        t: 45,
                        s: [25, 25]
                      },
                      {
                        t: 90,
                        s: [15, 15]
                      }
                    ], 
                    ix: 2 
                  },
                  e: { a: 0, k: 0, ix: 3 },
                  nm: "Blockage 1",
                  mn: "ADBE Vector Shape - Ellipse",
                  hd: false
                },
                {
                  ty: "fl",
                  c: { a: 0, k: [0.61, 0.29, 0.37, 1], ix: 4 },
                  o: { a: 0, k: 100, ix: 5 },
                  r: 1,
                  bm: 0,
                  nm: "Blockage Fill",
                  mn: "ADBE Vector Graphic - Fill",
                  hd: false
                }
              ],
              nm: "Blockage 1",
              np: 2,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false
            },
            {
              ty: "gr",
              it: [
                {
                  ty: "el",
                  p: { a: 0, k: [60, 70], ix: 3 },
                  s: { 
                    a: 1, 
                    k: [
                      {
                        i: { x: [0.667, 0.667], y: [1, 1] },
                        o: { x: [0.333, 0.333], y: [0, 0] },
                        t: 10,
                        s: [20, 20]
                      },
                      {
                        i: { x: [0.667, 0.667], y: [1, 1] },
                        o: { x: [0.333, 0.333], y: [0, 0] },
                        t: 55,
                        s: [30, 30]
                      },
                      {
                        t: 100,
                        s: [20, 20]
                      }
                    ], 
                    ix: 2 
                  },
                  e: { a: 0, k: 0, ix: 3 },
                  nm: "Blockage 2",
                  mn: "ADBE Vector Shape - Ellipse",
                  hd: false
                },
                {
                  ty: "fl",
                  c: { a: 0, k: [0.72, 0.65, 0.36, 1], ix: 4 },
                  o: { a: 0, k: 100, ix: 5 },
                  r: 1,
                  bm: 0,
                  nm: "Blockage Fill",
                  mn: "ADBE Vector Graphic - Fill",
                  hd: false
                }
              ],
              nm: "Blockage 2",
              np: 2,
              cix: 2,
              bm: 0,
              ix: 2,
              mn: "ADBE Vector Group",
              hd: false
            },
            {
              ty: "gr",
              it: [
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [20, 10], ix: 2 },
                  p: { a: 0, k: [-10, 100], ix: 3 },
                  r: { a: 0, k: 0, ix: 4 },
                  nm: "Blockage 3",
                  mn: "ADBE Vector Shape - Rect",
                  hd: false
                },
                {
                  ty: "fl",
                  c: { a: 0, k: [0.43, 0.41, 0.46, 1], ix: 4 },
                  o: { a: 0, k: 100, ix: 5 },
                  r: 1,
                  bm: 0,
                  nm: "Blockage Fill",
                  mn: "ADBE Vector Graphic - Fill",
                  hd: false
                }
              ],
              nm: "Blockage 3",
              np: 2,
              cix: 2,
              bm: 0,
              ix: 3,
              mn: "ADBE Vector Group",
              hd: false
            }
          ],
          ip: 0,
          op: 90,
          st: 0,
          bm: 0
        },
        {
          ddd: 0,
          ind: 5,
          ty: 4,
          nm: "Pump",
          sr: 1,
          ks: {
            o: { a: 0, k: 100, ix: 11 },
            r: { a: 0, k: 0, ix: 10 },
            p: { a: 0, k: [400, 220, 0], ix: 2, l: 2 },
            a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
            s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 }
          },
          ao: 0,
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ty: "rc",
                  d: 1,
                  s: { a: 0, k: [40, 30], ix: 2 },
                  p: { a: 0, k: [0, -50], ix: 3 },
                  r: { a: 0, k: 5, ix: 4 },
                  nm: "Pump Base",
                  mn: "ADBE Vector Shape - Rect",
                  hd: false
                },
                {
                  ty: "fl",
                  c: { a: 0, k: [0.43, 0.41, 0.46, 1], ix: 4 },
                  o: { a: 0, k: 100, ix: 5 },
                  r: 1,
                  bm: 0,
                  nm: "Pump Fill",
                  mn: "ADBE Vector Graphic - Fill",
                  hd: false
                }
              ],
              nm: "Pump Base",
              np: 2,
              cix: 2,
              bm: 0,
              ix: 1,
              mn: "ADBE Vector Group",
              hd: false
            },
            {
              ty: "gr",
              it: [
                {
                  ty: "el",
                  p: { a: 0, k: [0, -50], ix: 3 },
                  s: { 
                    a: 1, 
                    k: [
                      {
                        i: { x: [0.667, 0.667], y: [1, 1] },
                        o: { x: [0.333, 0.333], y: [0, 0] },
                        t: 0,
                        s: [15, 15]
                      },
                      {
                        i: { x: [0.667, 0.667], y: [1, 1] },
                        o: { x: [0.333, 0.333], y: [0, 0] },
                        t: 15,
                        s: [20, 20]
                      },
                      {
                        i: { x: [0.667, 0.667], y: [1, 1] },
                        o: { x: [0.333, 0.333], y: [0, 0] },
                        t: 30,
                        s: [15, 15]
                      },
                      {
                        i: { x: [0.667, 0.667], y: [1, 1] },
                        o: { x: [0.333, 0.333], y: [0, 0] },
                        t: 45,
                        s: [20, 20]
                      },
                      {
                        i: { x: [0.667, 0.667], y: [1, 1] },
                        o: { x: [0.333, 0.333], y: [0, 0] },
                        t: 60,
                        s: [15, 15]
                      },
                      {
                        i: { x: [0.667, 0.667], y: [1, 1] },
                        o: { x: [0.333, 0.333], y: [0, 0] },
                        t: 75,
                        s: [20, 20]
                      },
                      {
                        t: 90,
                        s: [15, 15]
                      }
                    ], 
                    ix: 2 
                  },
                  e: { a: 0, k: 0, ix: 3 },
                  nm: "Pump Button",
                  mn: "ADBE Vector Shape - Ellipse",
                  hd: false
                },
                {
                  ty: "fl",
                  c: { a: 0, k: [0.85, 0.33, 0.35, 1], ix: 4 },
                  o: { a: 0, k: 100, ix: 5 },
                  r: 1,
                  bm: 0,
                  nm: "Pump Button Fill",
                  mn: "ADBE Vector Graphic - Fill",
                  hd: false
                }
              ],
              nm: "Pump Button",
              np: 2,
              cix: 2,
              bm: 0,
              ix: 2,
              mn: "ADBE Vector Group",
              hd: false
            }
          ],
          ip: 0,
          op: 90,
          st: 0,
          bm: 0
        }
      ],
      markers: []
    }
  };
  
  // Initialize Lottie animation
  const anim = lottie.loadAnimation(houseAnimation);
}

function setupTooltips() {
  // Set up tooltip hover events
  const tooltips = document.querySelectorAll('.info-tooltip');
  const houseOverlay = document.querySelector('.house-overlay');
  
  tooltips.forEach(tooltip => {
    gsap.to(tooltip, { 
      opacity: 1, 
      duration: 0.5, 
      delay: Math.random() * 1.5 + 1,
      ease: "power2.out" 
    });
    
    tooltip.addEventListener('mouseenter', () => {
      gsap.to(tooltip, { 
        scale: 1.1, 
        boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
        duration: 0.3 
      });
    });
    
    tooltip.addEventListener('mouseleave', () => {
      gsap.to(tooltip, { 
        scale: 1, 
        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
        duration: 0.3 
      });
    });
    
    tooltip.addEventListener('click', () => {
      const id = tooltip.id.replace('tooltip', '').toLowerCase();
      const cardId = `${id}-card`;
      const card = document.getElementById(cardId);
      
      if (card) {
        card.scrollIntoView({ behavior: 'smooth' });
        
        gsap.fromTo(card, 
          { backgroundColor: "#ffffcc" }, 
          { 
            backgroundColor: "white", 
            duration: 1.5,
            ease: "power2.out" 
          }
        );
      }
    });
  });
  
  // Animate house overlay elements randomly
  function animateRandomTooltip() {
    const randomTooltip = tooltips[Math.floor(Math.random() * tooltips.length)];
    
    gsap.to(randomTooltip, {
      y: -5,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(randomTooltip, {
          y: 0,
          duration: 0.5,
          ease: "power2.in"
        });
      }
    });
    
    // Schedule next animation
    setTimeout(animateRandomTooltip, Math.random() * 3000 + 2000);
  }
  
  // Start random animations after initial delay
  setTimeout(animateRandomTooltip, 3000);
}

function setupComparisonChart() {
  const ctx = document.getElementById('methodComparisonChart');
  
  if (!ctx) return;
  
  const chart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['修复效果', '可持续性', '舒适度', '副作用少', '不影响生活', '个性化'],
      datasets: [
        {
          label: '饮食控制（塑料布）',
          data: [6, 3, 3, 6, 2, 4],
          backgroundColor: 'rgba(76, 175, 80, 0.2)',
          borderColor: '#4CAF50',
          borderWidth: 2
        },
        {
          label: '运动（接水桶）',
          data: [4, 5, 5, 8, 6, 3],
          backgroundColor: 'rgba(33, 150, 243, 0.2)',
          borderColor: '#2196F3',
          borderWidth: 2
        },
        {
          label: '药物（胶带）',
          data: [7, 4, 4, 3, 4, 5],
          backgroundColor: 'rgba(255, 193, 7, 0.2)',
          borderColor: '#FFC107',
          borderWidth: 2
        },
        {
          label: '手术（拆除管道）',
          data: [9, 6, 2, 4, 2, 6],
          backgroundColor: 'rgba(156, 39, 176, 0.2)',
          borderColor: '#9C27B0',
          borderWidth: 2
        },
        {
          label: '中医古方（疏通管道）',
          data: [6, 8, 8, 9, 8, 9],
          backgroundColor: 'rgba(255, 87, 34, 0.2)',
          borderColor: '#FF5722',
          borderWidth: 2
        }
      ]
    },
    options: {
      scales: {
        r: {
          angleLines: {
            display: true
          },
          suggestedMin: 0,
          suggestedMax: 10,
          ticks: {
            stepSize: 2
          }
        }
      },
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: '减肥方法效果对比'
        }
      },
      responsive: true,
      maintainAspectRatio: false
    }
  });
}

function setupQuiz() {
  const startButton = document.getElementById('start-quiz-btn');
  const quizStart = document.getElementById('quiz-start');
  const quizQuestions = document.getElementById('quiz-questions');
  const quizResults = document.getElementById('quiz-results');
  const questionContainer = document.querySelector('.question-container');
  const prevButton = document.getElementById('prev-question');
  const nextButton = document.getElementById('next-question');
  const progressBar = document.querySelector('.progress');
  const resultContent = document.getElementById('result-content');
  const recommendedRecipe = document.getElementById('recommended-recipe');
  
  if (!startButton) return;
  
  const questions = [
    {
      question: "你是否经常感觉身体沉重，四肢乏力？",
      options: ["从不", "偶尔", "经常", "总是如此"]
    },
    {
      question: "你的舌苔是否厚腻，感觉口中黏黏的？",
      options: ["舌苔很薄", "偶尔有厚苔", "经常厚腻", "总是厚腻发白或发黄"]
    },
    {
      question: "你是否容易感到胃部胀满，消化不良？",
      options: ["消化很好", "偶尔不适", "经常消化不良", "总是感觉胃胀"]
    },
    {
      question: "运动后，你是否容易出汗过多或感觉疲惫不堪？",
      options: ["精力充沛", "略有疲惫", "容易疲劳", "极度疲惫"]
    },
    {
      question: "你的皮肤是否容易出油，或有湿疹困扰？",
      options: ["皮肤干爽", "偶尔出油", "经常出油", "严重油腻或湿疹"]
    }
  ];
  
  let currentQuestion = 0;
  let answers = [];
  
  function showQuestion(index) {
    questionContainer.innerHTML = `
      <div class="quiz-question">${index + 1}. ${questions[index].question}</div>
      <div class="quiz-options">
        ${questions[index].options.map((option, i) => `
          <div class="quiz-option ${answers[index] === i ? 'selected' : ''}" data-index="${i}">${option}</div>
        `).join('')}
      </div>
    `;
    
    progressBar.style.width = `${((index + 1) / questions.length) * 100}%`;
    
    // Add event listeners to options
    document.querySelectorAll('.quiz-option').forEach(option => {
      option.addEventListener('click', function() {
        document.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected'));
        this.classList.add('selected');
        answers[currentQuestion] = parseInt(this.dataset.index);
      });
    });
    
    // Update button states
    prevButton.disabled = index === 0;
    if (index === questions.length - 1) {
      nextButton.textContent = '查看结果';
    } else {
      nextButton.textContent = '下一题';
    }
  }
  
  function calculateResult() {
    // Simple algorithm to determine the body type based on answers
    const sum = answers.reduce((acc, val) => acc + val, 0);
    const avg = sum / answers.length;
    
    let bodyType, recommendation;
    
    if (avg < 1.5) {
      bodyType = "气虚体质";
      recommendation = `
        <h4>山药粥</h4>
        <p>山药能补脾肺肾，黄芪补气健脾，帮助提升"水泵动力"，增强代谢功能。</p>
        <p>每周食用3-4次，可帮助提升能量，改善疲劳感。</p>
      `;
    } else if (avg < 2.5) {
      bodyType = "痰湿体质";
      recommendation = `
        <h4>薏米粥</h4>
        <p>薏米健脾祛湿，红枣补气养血，有助于排出体内多余水分，减轻身体沉重感。</p>
        <p>每周食用3-4次，可帮助改善湿气重的情况。</p>
      `;
    } else {
      bodyType = "气滞痰湿体质";
      recommendation = `
        <h4>玫瑰花茶</h4>
        <p>玫瑰舒肝理气，山楂化痰消积，有助于改善情绪和消化，减少情绪性饮食。</p>
        <p>工作压力大或情绪低落时饮用，帮助舒缓压力。</p>
      `;
    }
    
    return {
      bodyType,
      description: getBodyTypeDescription(bodyType),
      recommendation
    };
  }
  
  function getBodyTypeDescription(type) {
    switch(type) {
      case "气虚体质":
        return "你的体质类似于'水泵老化'，动力不足，导致代谢循环缓慢。气虚体质的人常感疲乏，容易出汗，精力不足。";
      case "痰湿体质":
        return "你的体质类似于'下水道积水'，体内湿气重，代谢物排不出去。痰湿体质的人常感身体沉重，舌苔厚腻，容易水肿。";
      case "气滞痰湿体质":
        return "你的体质类似于'管道淤积油垢'，气机不畅，湿痰内阻。气滞痰湿体质的人常感胸闷胀满，情绪波动，消化不良。";
      default:
        return "";
    }
  }
  
  // Start quiz button
  startButton.addEventListener('click', function() {
    quizStart.classList.add('hidden');
    quizQuestions.classList.remove('hidden');
    showQuestion(0);
  });
  
  // Previous question button
  prevButton.addEventListener('click', function() {
    if (currentQuestion > 0) {
      currentQuestion--;
      showQuestion(currentQuestion);
    }
  });
  
  // Next question button
  nextButton.addEventListener('click', function() {
    if (answers[currentQuestion] === undefined) {
      alert('请选择一个选项');
      return;
    }
    
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      showQuestion(currentQuestion);
    } else {
      // Show results
      const result = calculateResult();
      
      resultContent.innerHTML = `
        <h3>${result.bodyType}</h3>
        <p>${result.description}</p>
      `;
      
      recommendedRecipe.innerHTML = result.recommendation;
      
      quizQuestions.classList.add('hidden');
      quizResults.classList.remove('hidden');
    }
  });
  
  // View recipes button
  document.getElementById('view-recipes-btn')?.addEventListener('click', function() {
    document.querySelector('.recipe-section').scrollIntoView({ behavior: 'smooth' });
  });
}

function setupRecipeCards() {
  const detailButtons = document.querySelectorAll('.recipe-details-btn');
  
  detailButtons.forEach(button => {
    button.addEventListener('click', function() {
      const details = this.nextElementSibling;
      if (details.classList.contains('hidden')) {
        details.classList.remove('hidden');
        this.textContent = '收起详情';
      } else {
        details.classList.add('hidden');
        this.textContent = '查看详情';
      }
    });
  });
}

function setupButtons() {
  // Find TCM doctor button
  document.getElementById('find-tcm-btn')?.addEventListener('click', function() {
    alert('该功能正在开发中，敬请期待！');
  });
  
  // Contact us button
  document.getElementById('contact-us-btn')?.addEventListener('click', function() {
    alert('请通过邮箱contact@tcmhealth.com联系我们');
  });
}