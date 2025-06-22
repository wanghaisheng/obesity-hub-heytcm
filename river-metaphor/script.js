// Water animation for hero background
class WaterAnimation {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.waves = [];
        this.time = 0;
        
        this.resize();
        this.createWaves();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    createWaves() {
        this.waves = [];
        for (let i = 0; i < 5; i++) {
            this.waves.push({
                amplitude: 30 + Math.random() * 40,
                frequency: 0.01 + Math.random() * 0.02,
                phase: Math.random() * Math.PI * 2,
                speed: 0.02 + Math.random() * 0.02,
                offset: i * 80
            });
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.waves.forEach((wave, index) => {
            this.ctx.beginPath();
            this.ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 - index * 0.02})`;
            this.ctx.lineWidth = 2;
            
            for (let x = 0; x <= this.canvas.width; x += 5) {
                const y = this.canvas.height / 2 + wave.offset +
                    Math.sin(x * wave.frequency + this.time * wave.speed + wave.phase) * wave.amplitude;
                
                if (x === 0) {
                    this.ctx.moveTo(x, y);
                } else {
                    this.ctx.lineTo(x, y);
                }
            }
            
            this.ctx.stroke();
        });
        
        this.time += 1;
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize water animation
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('waterCanvas');
    if (canvas) {
        new WaterAnimation(canvas);
    }
});

// Smooth scrolling and navigation
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Navigation active state management
function updateActiveNav() {
    const sections = document.querySelectorAll('.section, .hero');
    const navItems = document.querySelectorAll('.nav-item');
    
    let currentSection = 'hero';
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.id || 'hero';
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.section === currentSection) {
            item.classList.add('active');
        }
    });
}

// Navigation click handlers
document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const section = item.dataset.section;
            if (section === 'hero') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                scrollToSection(section);
            }
        });
    });
    
    // Update active nav on scroll
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();
});

// Concept card interactions
const conceptData = {
    metaphor: {
        title: '河流隐喻',
        content: `
            <h3>🌊 河流隐喻的核心理念</h3>
            <p>河流隐喻是中医理论形成的重要认知基础，古代医家通过观察自然界河流的特性，形成了对人体生理、病理的深刻认识。</p>
            
            <div class="visual-metaphor">
                <h4>🔍 隐喻映射过程：</h4>
                <div class="mapping-flow">
                    <div class="mapping-item source">
                        <strong>始源域：</strong>自然界河流、水系
                        <div class="example">💧 黄河、长江、淮水、济水...</div>
                    </div>
                    <div class="mapping-arrow">→</div>
                    <div class="mapping-item target">
                        <strong>目标域：</strong>人体经络、脏腑
                        <div class="example">🫀 足阳明胃经、手太阴肺经...</div>
                    </div>
                </div>
                <div class="mapping-relationship">
                    <strong>映射关系：</strong>结构相似性与功能类比
                    <ul>
                        <li>河流通道 ↔ 经络通道</li>
                        <li>水流方向 ↔ 经气流向</li>
                        <li>河流汇聚 ↔ 气血汇聚</li>
                        <li>河道淤堵 ↔ 经络阻滞</li>
                    </ul>
                </div>
            </div>
            
            <h4>💡 认知价值：</h4>
            <p>使原本隐藏于体内、肉眼不可见的经络变得生动形象，更具立体感，加深了对人体生理机能的理解。正如《灵枢·经水》所言："十二经脉者，人之所以生，病之所以成，人之所以治，病之所以起。"</p>
            
            <div class="insight-box">
                <h4>🎯 现代启示：</h4>
                <p>这种隐喻认知方法至今仍具有重要意义，帮助我们理解复杂的人体系统，为中医现代化提供了独特的认知路径。</p>
            </div>
        `
    },
    'water-cycle': {
        title: '水循环认知',
        content: `
            <h3>♻️ 自然水循环与人体水液代谢</h3>
            <p>《内经》时代的医家已经认识到自然界水循环的基本过程，并以此为基础理解人体水液代谢。</p>
            
            <div class="cycle-comparison">
                <div class="natural-cycle">
                    <h4>🌧️ 自然水循环：</h4>
                    <div class="cycle-steps">
                        <div class="step">☀️ 蒸发</div>
                        <div class="arrow">→</div>
                        <div class="step">☁️ 成云</div>
                        <div class="arrow">→</div>
                        <div class="step">🌧️ 降雨</div>
                        <div class="arrow">→</div>
                        <div class="step">🌊 汇流</div>
                        <div class="arrow">→</div>
                        <div class="step">🌊 入海</div>
                    </div>
                    <p><em>周而复始，生生不息</em></p>
                </div>
                
                <div class="body-cycle">
                    <h4>💧 人体水液代谢：</h4>
                    <div class="cycle-steps">
                        <div class="step">🍽️ 脾胃运化</div>
                        <div class="arrow">→</div>
                        <div class="step">🫁 肺主宣降</div>
                        <div class="arrow">→</div>
                        <div class="step">🫘 肾主水液</div>
                        <div class="arrow">→</div>
                        <div class="step">🧠 膀胱储泄</div>
                    </div>
                    <p><em>三焦通调，水道畅通</em></p>
                </div>
            </div>
            
            <div class="detailed-mapping">
                <h4>🔄 详细对应关系：</h4>
                <ul>
                    <li><strong>云雾 ↔ 肺气：</strong>肺主一身之气，如云雾弥漫全身</li>
                    <li><strong>山泉 ↔ 肾精：</strong>肾为先天之本，如山泉之源源不断</li>
                    <li><strong>河道 ↔ 三焦：</strong>三焦为水道，如河道疏导水流</li>
                    <li><strong>湖泊 ↔ 膀胱：</strong>膀胱储津液，如湖泊蓄水调节</li>
                </ul>
            </div>
            
            <h4>🎯 临床意义：</h4>
            <p>为理解水肿、痰饮、癃闭等水液代谢疾病提供了理论基础，指导临床"开鬼门、洁净府、去宛陈莝"的治疗原则。</p>
            
            <div class="case-example">
                <h4>📖 经典案例：</h4>
                <p><strong>水肿治疗：</strong>如治理洪水，需"上游疏导（调肺），中游疏通（调脾），下游排泄（调肾）"，体现了水循环认知在临床的具体应用。</p>
            </div>
        `
    },
    meridians: {
        title: '经脉如河',
        content: `
            <h3>🗺️ 经脉与河流的结构相似性</h3>
            <p>经脉与河流在形态结构上具有极大相似性，都是通道结构，其中流动着某种物质。</p>
            
            <div class="meridian-river-map">
                <h4>🌊 《灵枢·经水》篇的智慧：</h4>
                <p class="classical-quote">"十二经脉者，人之所以生，病之所以成，人之所以治，病之所以起，学之所始，工之所止也。"</p>
                
                <div class="twelve-mapping">
                    <h4>📍 十二经水与十二经脉对应：</h4>
                    <div class="mapping-grid">
                        <div class="mapping-pair">
                            <span class="river">🌊 黄河</span>
                            <span class="meridian">↔ 足阳明胃经</span>
                            <div class="description">黄河奔流不息，胃经气血充盛</div>
                        </div>
                        <div class="mapping-pair">
                            <span class="river">🌊 淮水</span>
                            <span class="meridian">↔ 足太阳膀胱经</span>
                            <div class="description">淮水广阔，膀胱经脉最长</div>
                        </div>
                        <div class="mapping-pair">
                            <span class="river">🌊 长江</span>
                            <span class="meridian">↔ 足少阳胆经</span>
                            <div class="description">长江蜿蜒，胆经循行复杂</div>
                        </div>
                        <div class="mapping-pair">
                            <span class="river">🌊 济水</span>
                            <span class="meridian">↔ 足太阴脾经</span>
                            <div class="description">济水清澈，脾经运化精微</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="functional-analogy">
                <h4>⚡ 功能类比的深层含义：</h4>
                <div class="analogy-items">
                    <div class="analogy-item">
                        <div class="river-aspect">🌊 河流流量</div>
                        <div class="meridian-aspect">↔ 经气盛衰</div>
                        <div class="explanation">春夏经气如洪水期，秋冬如枯水期</div>
                    </div>
                    <div class="analogy-item">
                        <div class="river-aspect">🛤️ 河道通畅</div>
                        <div class="meridian-aspect">↔ 经络畅通</div>
                        <div class="explanation">河道清淤保通航，经络调理保健康</div>
                    </div>
                    <div class="analogy-item">
                        <div class="river-aspect">🌾 水流灌溉</div>
                        <div class="meridian-aspect">↔ 经脉濡养</div>
                        <div class="explanation">河水润泽田野，经气滋养脏腑</div>
                    </div>
                    <div class="analogy-item">
                        <div class="river-aspect">⛰️ 水系网络</div>
                        <div class="meridian-aspect">↔ 经络系统</div>
                        <div class="explanation">支流汇聚成大河，络脉汇聚成经脉</div>
                    </div>
                </div>
            </div>
            
            <div class="five-shu-points">
                <h4>🎯 五俞穴的河流隐喻：</h4>
                <div class="shu-points">
                    <div class="point">💧 井穴：如山间小泉</div>
                    <div class="point">🌊 荥穴：如溪流潺潺</div>
                    <div class="point">🏞️ 俞穴：如河流奔腾</div>
                    <div class="point">🌊 经穴：如大河滔滔</div>
                    <div class="point">🌊 合穴：如百川归海</div>
                </div>
                <p><em>从源头到汇聚，完美诠释了经气从弱到强的变化过程</em></p>
            </div>
            
            <div class="clinical-application">
                <h4>🏥 临床应用启示：</h4>
                <p>理解经脉如河的概念，有助于：</p>
                <ul>
                    <li><strong>针灸取穴：</strong>如治水需找准源头，取穴需明确经气所在</li>
                    <li><strong>诊断疾病：</strong>如观河流察地势，望经脉知病位</li>
                    <li><strong>调理气血：</strong>如疏导河流，调畅经络气血运行</li>
                </ul>
            </div>
        `
    },
    harmony: {
        title: '以通为和',
        content: `
            <h3>☯️ 通则不痛，痛则不通</h3>
            <p>"以通为和"体现了中医学对健康状态的根本认识，强调通畅是维持生命活力的关键。</p>
            
            <div class="harmony-principle">
                <div class="river-harmony">
                    <h4>🌊 河流之通：</h4>
                    <div class="river-states">
                        <div class="state positive">
                            <div class="icon">✅</div>
                            <div class="title">水流通畅</div>
                            <div class="description">万物滋养，生机勃勃</div>
                            <div class="example">如春江水暖，鱼跃龙门</div>
                        </div>
                        <div class="state negative">
                            <div class="icon">❌</div>
                            <div class="title">河道淤堵</div>
                            <div class="description">灾害频发，民不聊生</div>
                            <div class="example">如黄河决堤，洪水泛滥</div>
                        </div>
                        <div class="state treatment">
                            <div class="icon">🔧</div>
                            <div class="title">疏浚治水</div>
                            <div class="description">恢复生机，重现繁荣</div>
                            <div class="example">如都江堰工程，泽被千年</div>
                        </div>
                    </div>
                </div>
                
                <div class="body-harmony">
                    <h4>🧘 人体之通：</h4>
                    <div class="body-states">
                        <div class="state positive">
                            <div class="icon">✅</div>
                            <div class="title">经络通畅</div>
                            <div class="description">气血调和，身心健康</div>
                            <div class="example">如面色红润，精神饱满</div>
                        </div>
                        <div class="state negative">
                            <div class="icon">❌</div>
                            <div class="title">经脉阻滞</div>
                            <div class="description">疾病丛生，痛苦不堪</div>
                            <div class="example">如胸闷气短，四肢麻木</div>
                        </div>
                        <div class="state treatment">
                            <div class="icon">🔧</div>
                            <div class="title">调理经络</div>
                            <div class="description">恢复健康，重获活力</div>
                            <div class="example">如针灸推拿，药食调养</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="treatment-methods">
                <h4>🎯 "通"的治疗思想：</h4>
                <div class="methods-grid">
                    <div class="method">
                        <div class="method-name">🌿 疏肝理气</div>
                        <div class="river-analogy">如疏通河道</div>
                        <div class="effect">畅通气机，调和情志</div>
                    </div>
                    <div class="method">
                        <div class="method-name">💊 活血化瘀</div>
                        <div class="river-analogy">如冲刷淤泥</div>
                        <div class="effect">畅通血脉，消散积聚</div>
                    </div>
                    <div class="method">
                        <div class="method-name">🔥 温经通络</div>
                        <div class="river-analogy">如春融冰雪</div>
                        <div class="effect">温煦经脉，祛除寒凝</div>
                    </div>
                    <div class="method">
                        <div class="method-name">💨 祛风通窍</div>
                        <div class="river-analogy">如清除障碍</div>
                        <div class="effect">开通孔窍，祛邪外出</div>
                    </div>
                </div>
            </div>
            
            <div class="philosophical-depth">
                <h4>🧠 哲学深度：</h4>
                <div class="philosophy-content">
                    <p><strong>天人合一：</strong>自然界河流的畅通与人体经络的畅通遵循同一法则</p>
                    <p><strong>动静相宜：</strong>河流需要流动，人体需要运动，静则病生</p>
                    <p><strong>因势利导：</strong>治水顺水性，治病顺病势，不强求逆转</p>
                    <p><strong>防患未然：</strong>河堤需要维护，身体需要保养，预防胜于治疗</p>
                </div>
            </div>
            
            <div class="modern-relevance">
                <h4>🌟 现代意义：</h4>
                <p>在现代快节奏生活中，"以通为和"的理念提醒我们：</p>
                <ul>
                    <li><strong>身体层面：</strong>保持运动，促进血液循环</li>
                    <li><strong>心理层面：</strong>疏导情绪，保持心理健康</li>
                    <li><strong>社会层面：</strong>沟通交流，维护人际和谐</li>
                    <li><strong>生活层面：</strong>作息规律，顺应自然节律</li>
                </ul>
            </div>
            
            <div class="wisdom-quote">
                <p class="quote">"水善利万物而不争，处众人之所恶，故几于道。"</p>
                <p class="attribution">——《道德经》</p>
                <p class="interpretation">通畅之道，在于柔韧不争，在于顺势而为，在于利物无私。</p>
            </div>
        `
    }
};

// Concept card click handlers
document.addEventListener('DOMContentLoaded', () => {
    const conceptCards = document.querySelectorAll('.concept-card');
    const modal = document.getElementById('conceptModal');
    const modalBody = modal.querySelector('.modal-body');
    const closeBtn = modal.querySelector('.close');
    
    conceptCards.forEach(card => {
        card.addEventListener('click', () => {
            const concept = card.dataset.concept;
            const data = conceptData[concept];
            
            if (data) {
                modalBody.innerHTML = `
                    <h2>${data.title}</h2>
                    ${data.content}
                `;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    closeBtn.addEventListener('click', closeModal);
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    // Animate elements on scroll
    const animateElements = document.querySelectorAll('.concept-card, .organ-card, .pathology-card, .method-card, .feature');
    
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
});

// Touch gesture support for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe up - scroll to next section
            scrollToNextSection();
        } else {
            // Swipe down - scroll to previous section
            scrollToPreviousSection();
        }
    }
}

function scrollToNextSection() {
    const sections = ['hero', 'concepts', 'physiology', 'pathology', 'treatment'];
    const currentSection = getCurrentSection();
    const currentIndex = sections.indexOf(currentSection);
    
    if (currentIndex < sections.length - 1) {
        const nextSection = sections[currentIndex + 1];
        if (nextSection === 'hero') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            scrollToSection(nextSection);
        }
    }
}

function scrollToPreviousSection() {
    const sections = ['hero', 'concepts', 'physiology', 'pathology', 'treatment'];
    const currentSection = getCurrentSection();
    const currentIndex = sections.indexOf(currentSection);
    
    if (currentIndex > 0) {
        const prevSection = sections[currentIndex - 1];
        if (prevSection === 'hero') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            scrollToSection(prevSection);
        }
    }
}

function getCurrentSection() {
    const sections = document.querySelectorAll('.section, .hero');
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    
    let currentSection = 'hero';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.id || 'hero';
        }
    });
    
    return currentSection;
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'ArrowDown':
        case 'PageDown':
            e.preventDefault();
            scrollToNextSection();
            break;
        case 'ArrowUp':
        case 'PageUp':
            e.preventDefault();
            scrollToPreviousSection();
            break;
        case 'Home':
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            break;
        case 'End':
            e.preventDefault();
            scrollToSection('treatment');
            break;
        case 'Escape':
            const modal = document.getElementById('conceptModal');
            if (modal.style.display === 'block') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
            break;
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll handler
window.addEventListener('scroll', throttle(updateActiveNav, 100));

// Error handling utility
function handleNetworkError(error, context = 'Network operation') {
    console.warn(`${context} failed:`, error);
    
    // Show user-friendly error message
    const errorNotification = document.createElement('div');
    errorNotification.className = 'error-notification';
    errorNotification.innerHTML = `
        <div class="error-content">
            <span class="error-icon">⚠️</span>
            <span class="error-message">网络连接出现问题，请检查网络连接后重试</span>
            <button class="error-dismiss" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    document.body.appendChild(errorNotification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (errorNotification.parentNode) {
            errorNotification.remove();
        }
    }, 5000);
}

// Retry utility for network operations
async function retryOperation(operation, maxRetries = 3, delay = 1000) {
    let lastError;
    
    for (let i = 0; i < maxRetries; i++) {
        try {
            return await operation();
        } catch (error) {
            lastError = error;
            if (i < maxRetries - 1) {
                await new Promise(resolve => setTimeout(resolve, delay * Math.pow(2, i)));
            }
        }
    }
    
    throw lastError;
}

// Enhanced font loading with error handling
document.addEventListener('DOMContentLoaded', () => {
    // Preload fonts with error handling
    const fontPromises = [
        new FontFace('ZCOOL KuaiLe', 'url(https://fonts.gstatic.com/s/zcoolkuaile/v11/tssqApdaRQokwFjFJjvM6h2WpozzoXhC2g.woff2)').load().catch(e => handleNetworkError(e, 'Font loading')),
        new FontFace('Ma Shan Zheng', 'url(https://fonts.gstatic.com/s/mashanzheng/v10/NaPecZTSBuhTirw6IaFn_UrURdu5TAle.woff2)').load().catch(e => handleNetworkError(e, 'Font loading')),
        new FontFace('Noto Serif SC', 'url(https://fonts.gstatic.com/s/notoserifsc/v22/H4c8BXePl9DZ0Xe7gG9cyOj7mm2iy3TGrVQA.woff2)').load().catch(e => handleNetworkError(e, 'Font loading'))
    ];
    
    Promise.allSettled(fontPromises).then((results) => {
        const successfulFonts = results.filter(result => result.status === 'fulfilled');
        if (successfulFonts.length > 0) {
            document.body.classList.add('fonts-loaded');
        }
    });
});

// Add global error handler for unhandled promises
window.addEventListener('unhandledrejection', (event) => {
    event.preventDefault();
    handleNetworkError(event.reason, 'Unexpected network error');
});

// Add global error handler for JavaScript errors
window.addEventListener('error', (event) => {
    if (event.message && event.message.includes('network')) {
        handleNetworkError(event.error, 'JavaScript network error');
    }
});