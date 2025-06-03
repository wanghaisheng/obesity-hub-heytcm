// 完整方剂内容页面JavaScript

// 数据存储
const recipesData = {
    diseases: [
        "肥胖", "中风", "不孕不育", "带下病", "痞满", "眩晕", "头痛", "痹病", "闭经", "月经先期",
        "虚劳", "月经后期", "厥证", "月经先后无定期", "嘈杂", "妊娠恶阻", "淋证", "惊悸怔忡", "中暑", "月经过少",
        "脚气", "腹痛", "痿证", "缺乳", "呕吐", "遗精", "血证", "痫病", "泄泻", "胎动不安",
        "疟疾", "难产", "鼓胀", "产后血晕", "噎膈", "痛经", "疝气", "目肿目痛", "历节病", "疮疡",
        "喘病", "表证", "崩漏", "喑哑", "胃痛", "水肿", "舌喉痈", "积聚", "黄疸", "耳鸣耳聋",
        "不寐", "便秘", "痔", "月经过多", "牙痛", "胁痛", "消渴", "温病", "胎死不下", "乳汁自来",
        "内伤发热", "癃闭", "霍乱", "汗证", "鼾症", "咳嗽", "肺痈", "大头瘟", "颤证", "产后恶露不绝",
        "鼻鼽", "背痛"
    ],
    
    syndromes: [
        { name: "痰湿证", frequency: 99, percentage: 19.88, description: "最普遍的体质类型，身体湿气重，容易疲劳" },
        { name: "气滞痰湿证", frequency: 60, percentage: 12.05, description: "情绪不畅伴痰湿，胸闷腹胀" },
        { name: "气虚痰湿证", frequency: 59, percentage: 11.85, description: "气力不足伴痰湿，虚胖乏力" },
        { name: "痰湿热证", frequency: 52, percentage: 10.44, description: "痰湿与热邪并存，口苦面红" },
        { name: "痰浊证", frequency: 18, percentage: 3.61, description: "痰浊壅盛，身体沉重" },
        { name: "痰湿血瘀证", frequency: 11, percentage: 2.21, description: "痰湿伴血瘀，循环不畅" },
        { name: "痰浊瘀血证", frequency: 10, percentage: 2.01, description: "痰浊与血瘀并存" },
        { name: "气滞痰湿血瘀证", frequency: 8, percentage: 1.61, description: "气滞、痰湿、血瘀三者并存" },
        { name: "湿热证", frequency: 7, percentage: 1.41, description: "湿热内蕴，身热口苦" },
        { name: "气虚证", frequency: 6, percentage: 1.20, description: "元气不足，乏力气短" }
    ],
    
    prescriptions: [
        { name: "二陈汤", frequency: 70, description: "最常用的化痰祛湿方，健脾燥湿，理气化痰", composition: "半夏、陈皮、茯苓、甘草" },
        { name: "导痰汤", frequency: 23, description: "导痰下行，清热化痰", composition: "半夏、陈皮、茯苓、甘草、枳实、胆南星" },
        { name: "六君子汤", frequency: 21, description: "健脾益气的经典方，补气健脾，燥湿化痰", composition: "人参、白术、茯苓、甘草、陈皮、半夏" },
        { name: "四物汤", frequency: 15, description: "补血活血的代表方，养血调经", composition: "当归、川芎、白芍、熟地黄" },
        { name: "芎归汤", frequency: 8, description: "活血化瘀，调经止痛", composition: "川芎、当归" },
        { name: "补中益气汤", frequency: 7, description: "补中益气，升阳举陷", composition: "黄芪、人参、白术、甘草、当归、陈皮、升麻、柴胡" },
        { name: "温胆汤", frequency: 7, description: "清热化痰，和胃利胆", composition: "半夏、陈皮、茯苓、甘草、竹茹、枳实" }
    ],
    
    herbs: [
        { name: "半夏", frequency: 297, category: "化痰药", properties: "辛、温", functions: "燥湿化痰，降逆止呕", description: "化痰高手，祛痰燥湿" },
        { name: "甘草", frequency: 276, category: "补益药", properties: "甘、平", functions: "补脾益气，清热解毒", description: "百药之王，调和药性" },
        { name: "陈皮", frequency: 263, category: "理气药", properties: "辛、苦、温", functions: "理气健脾，燥湿化痰", description: "理气专家，理气消滞" },
        { name: "茯苓", frequency: 261, category: "利水药", properties: "甘、淡、平", functions: "利水渗湿，健脾宁心", description: "利水神器，利水渗湿" },
        { name: "白术", frequency: 195, category: "补益药", properties: "苦、甘、温", functions: "健脾益气，燥湿利水", description: "健脾要药，补气健脾" },
        { name: "苍术", frequency: 160, category: "化湿药", properties: "辛、苦、温", functions: "燥湿健脾，祛风散寒", description: "燥湿专药，祛湿健脾" },
        { name: "川芎", frequency: 148, category: "活血药", properties: "辛、温", functions: "活血行气，祛风止痛", description: "活血良药，行气活血" },
        { name: "生姜", frequency: 139, category: "解表药", properties: "辛、微温", functions: "发汗解表，温中止呕", description: "温中散寒，和胃止呕" },
        { name: "人参", frequency: 135, category: "补益药", properties: "甘、微苦、微温", functions: "大补元气，复脉固脱", description: "补气神药，大补元气" },
        { name: "当归", frequency: 122, category: "补血药", properties: "甘、辛、温", functions: "补血活血，调经止痛", description: "补血圣药，养血活血" }
    ]
};

// 初始化页面
document.addEventListener('DOMContentLoaded', function() {
    initializeRecipesPage();
    setupSearchAndFilter();
});

// 初始化页面内容
function initializeRecipesPage() {
    renderDiseases();
    renderSyndromes();
    renderPrescriptions();
    renderHerbs();
}

// 渲染疾病列表
function renderDiseases() {
    const grid = document.getElementById('diseases-grid');
    grid.innerHTML = recipesData.diseases.map(disease => `
        <div class="bg-red-50 rounded-lg p-3 text-center hover:bg-red-100 transition-colors cursor-pointer" 
             onclick="showDiseaseDetail('${disease}')">
            <span class="text-sm font-medium text-red-800">${disease}</span>
        </div>
    `).join('');
}

// 渲染证型列表
function renderSyndromes() {
    const list = document.getElementById('syndromes-list');
    list.innerHTML = recipesData.syndromes.map(syndrome => `
        <div class="bg-blue-50 rounded-lg p-4 hover:bg-blue-100 transition-colors cursor-pointer" 
             onclick="showSyndromeDetail('${syndrome.name}')">
            <div class="flex justify-between items-start mb-2">
                <h3 class="font-semibold text-blue-800">${syndrome.name}</h3>
                <div class="text-right">
                    <span class="text-sm font-medium text-blue-600">${syndrome.frequency}次</span>
                    <span class="text-xs text-blue-500 block">(${syndrome.percentage}%)</span>
                </div>
            </div>
            <p class="text-sm text-blue-700">${syndrome.description}</p>
        </div>
    `).join('');
}

// 渲染方剂列表
function renderPrescriptions() {
    const grid = document.getElementById('prescriptions-grid');
    grid.innerHTML = recipesData.prescriptions.map(prescription => `
        <div class="bg-green-50 rounded-lg p-6 hover:bg-green-100 transition-colors cursor-pointer" 
             onclick="showPrescriptionDetail('${prescription.name}')">
            <div class="flex justify-between items-start mb-3">
                <h3 class="font-semibold text-green-800 text-lg">${prescription.name}</h3>
                <span class="text-sm font-medium text-green-600 bg-green-200 px-2 py-1 rounded">${prescription.frequency}次</span>
            </div>
            <p class="text-sm text-green-700 mb-3">${prescription.description}</p>
            <div class="border-t border-green-200 pt-3">
                <p class="text-xs font-medium text-green-600 mb-1">主要组成：</p>
                <p class="text-xs text-green-600">${prescription.composition}</p>
            </div>
        </div>
    `).join('');
}

// 渲染药材列表
function renderHerbs() {
    const grid = document.getElementById('herbs-grid');
    grid.innerHTML = recipesData.herbs.map(herb => `
        <div class="bg-yellow-50 rounded-lg p-4 hover:bg-yellow-100 transition-colors cursor-pointer" 
             onclick="showHerbDetail('${herb.name}')">
            <div class="text-center">
                <div class="w-12 h-12 bg-yellow-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span class="text-lg font-serif text-yellow-800">${herb.name.charAt(0)}</span>
                </div>
                <h3 class="font-semibold text-yellow-800 mb-1">${herb.name}</h3>
                <p class="text-xs text-yellow-600 mb-1">${herb.description}</p>
                <span class="text-xs font-medium text-yellow-600 bg-yellow-200 px-2 py-1 rounded">${herb.frequency}次</span>
            </div>
        </div>
    `).join('');
}

// 设置搜索和筛选功能
function setupSearchAndFilter() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const sortBy = document.getElementById('sortBy');
    
    // 搜索功能
    searchInput.addEventListener('input', function() {
        const keyword = this.value.toLowerCase();
        filterContent(keyword, categoryFilter.value);
    });
    
    // 分类筛选
    categoryFilter.addEventListener('change', function() {
        const keyword = searchInput.value.toLowerCase();
        filterContent(keyword, this.value);
    });
    
    // 排序功能
    sortBy.addEventListener('change', function() {
        sortContent(this.value);
    });
}

// 筛选内容
function filterContent(keyword, category) {
    const sections = ['diseases', 'syndromes', 'prescriptions', 'herbs'];
    
    sections.forEach(section => {
        const sectionElement = document.getElementById(`${section}-section`);
        
        if (category === 'all' || category === section) {
            sectionElement.style.display = 'block';
            
            // 如果有关键词，进行搜索筛选
            if (keyword) {
                const items = sectionElement.querySelectorAll('[onclick]');
                items.forEach(item => {
                    const text = item.textContent.toLowerCase();
                    item.style.display = text.includes(keyword) ? 'block' : 'none';
                });
            } else {
                // 显示所有项目
                const items = sectionElement.querySelectorAll('[onclick]');
                items.forEach(item => {
                    item.style.display = 'block';
                });
            }
        } else {
            sectionElement.style.display = 'none';
        }
    });
}

// 排序内容
function sortContent(sortType) {
    // 这里可以根据排序类型重新渲染内容
    // 为简化示例，暂时不实现具体排序逻辑
    console.log('Sorting by:', sortType);
}

// 显示详细信息的模态框函数
function showDiseaseDetail(disease) {
    showModal(`疾病详情：${disease}`, `
        <p class="text-sage-600 mb-4">疾病名称：<strong>${disease}</strong></p>
        <p class="text-sage-600 mb-4">这是古籍中记载的与肥胖相关的疾病之一。</p>
        <p class="text-sm text-sage-500">注：具体症状表现和治疗方案需要咨询专业中医师。</p>
    `);
}

function showSyndromeDetail(syndrome) {
    const syndromeData = recipesData.syndromes.find(s => s.name === syndrome);
    showModal(`证型详情：${syndrome}`, `
        <p class="text-sage-600 mb-4">证型名称：<strong>${syndromeData.name}</strong></p>
        <p class="text-sage-600 mb-4">出现频率：${syndromeData.frequency}次 (${syndromeData.percentage}%)</p>
        <p class="text-sage-600 mb-4">特点描述：${syndromeData.description}</p>
        <p class="text-sm text-sage-500">注：证型诊断需要专业中医师综合判断。</p>
    `);
}

function showPrescriptionDetail(prescription) {
    const prescriptionData = recipesData.prescriptions.find(p => p.name === prescription);
    showModal(`方剂详情：${prescription}`, `
        <p class="text-sage-600 mb-4">方剂名称：<strong>${prescriptionData.name}</strong></p>
        <p class="text-sage-600 mb-4">使用频率：${prescriptionData.frequency}次</p>
        <p class="text-sage-600 mb-4">主要功效：${prescriptionData.description}</p>
        <p class="text-sage-600 mb-4">方剂组成：${prescriptionData.composition}</p>
        <p class="text-sm text-sage-500">注：方剂使用必须在专业中医师指导下进行，切勿自行配制。</p>
    `);
}

function showHerbDetail(herb) {
    const herbData = recipesData.herbs.find(h => h.name === herb);
    showModal(`药材详情：${herb}`, `
        <p class="text-sage-600 mb-4">药材名称：<strong>${herbData.name}</strong></p>
        <p class="text-sage-600 mb-4">使用频率：${herbData.frequency}次</p>
        <p class="text-sage-600 mb-4">药材分类：${herbData.category}</p>
        <p class="text-sage-600 mb-4">性味：${herbData.properties}</p>
        <p class="text-sage-600 mb-4">主要功效：${herbData.functions}</p>
        <p class="text-sage-600 mb-4">功能简述：${herbData.description}</p>
        <p class="text-sm text-sage-500">注：中药材使用需要专业指导，切勿自行使用。</p>
    `);
}

// 通用模态框显示函数
function showModal(title, content) {
    // 创建模态框
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4';
    modal.innerHTML = `
        <div class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div class="p-6">
                <div class="flex justify-between items-center mb-6">
                    <h3 class="text-xl font-serif font-semibold text-sage-800">${title}</h3>
                    <button onclick="this.closest('.fixed').remove()" class="text-sage-500 hover:text-sage-700 transition-colors">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
                <div class="content">
                    ${content}
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // 点击外部关闭
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// 暴露全局函数
window.showDiseaseDetail = showDiseaseDetail;
window.showSyndromeDetail = showSyndromeDetail;
window.showPrescriptionDetail = showPrescriptionDetail;
window.showHerbDetail = showHerbDetail;
