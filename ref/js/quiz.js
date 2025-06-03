// 体质测评功能

// 测评题目数据
const quizData = {
    questions: [
        {
            id: 1,
            question: '您平时是否容易感到疲劳乏力？',
            options: [
                { text: '经常如此', value: 'qixu', score: 3 },
                { text: '偶尔如此', value: 'qixu', score: 2 },
                { text: '很少如此', value: 'normal', score: 1 },
                { text: '从不如此', value: 'normal', score: 0 }
            ]
        },
        {
            id: 2,
            question: '您的舌苔通常是什么样的？',
            options: [
                { text: '厚腻、白腻', value: 'tanshi', score: 3 },
                { text: '稍厚', value: 'tanshi', score: 2 },
                { text: '薄白', value: 'normal', score: 1 },
                { text: '不确定', value: 'normal', score: 0 }
            ]
        },
        {
            id: 3,
            question: '您平时的情绪状态如何？',
            options: [
                { text: '经常郁闷、易怒', value: 'qizhi', score: 3 },
                { text: '偶尔情绪波动', value: 'qizhi', score: 2 },
                { text: '情绪比较稳定', value: 'normal', score: 1 },
                { text: '心情愉快', value: 'normal', score: 0 }
            ]
        },
        {
            id: 4,
            question: '您是否容易出现腹胀、胸闷的感觉？',
            options: [
                { text: '经常出现', value: 'qizhi', score: 3 },
                { text: '偶尔出现', value: 'qizhi', score: 2 },
                { text: '很少出现', value: 'normal', score: 1 },
                { text: '从不出现', value: 'normal', score: 0 }
            ]
        },
        {
            id: 5,
            question: '您的大便情况通常如何？',
            options: [
                { text: '经常便秘或黏腻', value: 'tanshi', score: 3 },
                { text: '偶尔不正常', value: 'tanshi', score: 2 },
                { text: '基本正常', value: 'normal', score: 1 },
                { text: '非常规律', value: 'normal', score: 0 }
            ]
        },
        {
            id: 6,
            question: '您是否容易出汗？',
            options: [
                { text: '动则汗出，汗量多', value: 'qixu', score: 3 },
                { text: '稍动即汗', value: 'qixu', score: 2 },
                { text: '正常出汗', value: 'normal', score: 1 },
                { text: '很少出汗', value: 'normal', score: 0 }
            ]
        },
        {
            id: 7,
            question: '您的皮肤和脸色如何？',
            options: [
                { text: '面色暗沉，皮肤粗糙', value: 'yuxue', score: 3 },
                { text: '偶尔暗沉', value: 'yuxue', score: 2 },
                { text: '基本正常', value: 'normal', score: 1 },
                { text: '红润有光泽', value: 'normal', score: 0 }
            ]
        },
        {
            id: 8,
            question: '您平时是否感觉身体沉重？',
            options: [
                { text: '经常感觉身体沉重', value: 'tanshi', score: 3 },
                { text: '偶尔感觉沉重', value: 'tanshi', score: 2 },
                { text: '偶尔感觉轻松', value: 'normal', score: 1 },
                { text: '身体轻松', value: 'normal', score: 0 }
            ]
        }
    ]
};

// 体质类型描述
const constitutionTypes = {
    tanshi: {
        name: '痰湿体质',
        description: '您可能属于痰湿体质，身体容易积聚湿气和痰浊',
        characteristics: [
            '身体沉重，容易疲倦',
            '舌苔厚腻，大便黏腻',
            '容易浮肿，出汗黏腻',
            '食欲不振，腹部肥胖'
        ],
        advice: [
            '避免甜腻、生冷、油腻食物',
            '多食用薏米、冬瓜、山药等健脾利湿食材',
            '适当运动，如散步、太极',
            '保持环境干燥通风'
        ],
        color: 'blue'
    },
    qixu: {
        name: '气虚体质',
        description: '您可能属于气虚体质，身体元气不足，容易疲劳',
        characteristics: [
            '容易疲劳乏力',
            '气短懒言，动则汗出',
            '面色萎黄，精神不振',
            '抵抗力较弱，易感冒'
        ],
        advice: [
            '避免过度劳累，注意休息',
            '多食用人参、黄芪、山药等补气食材',
            '适量运动，避免剧烈运动',
            '保持规律作息，早睡早起'
        ],
        color: 'green'
    },
    qizhi: {
        name: '气滞体质',
        description: '您可能属于气滞体质，气机运行不畅',
        characteristics: [
            '情绪波动大，易怒易怒',
            '胸闷腹胀，嗳气频繁',
            '睡眠不安，多梦',
            '月经不调（女性）'
        ],
        advice: [
            '保持心情愉快，学会放松',
            '多食用柑橘类、萝卜等理气食材',
            '适当运动，如瑜伽、太极',
            '避免长期精神紧张'
        ],
        color: 'purple'
    },
    yuxue: {
        name: '瘀血体质',
        description: '您可能属于瘀血体质，血液循环不畅',
        characteristics: [
            '面色暗沉，皮肤粗糙',
            '容易出现瘀斑，伤口愈合慢',
            '身体疼痛，位置固定',
            '月经不调，有血块（女性）'
        ],
        advice: [
            '多食用山楂、红花、丹参等活血食材',
            '适当运动，促进血液循环',
            '避免久坐不动',
            '保持心情舒畅'
        ],
        color: 'red'
    },
    normal: {
        name: '平和体质',
        description: '恭喜您！您的体质相对平和健康',
        characteristics: [
            '精力充沛，不易疲劳',
            '情绪稳定，心情愉快',
            '睡眠良好，食欲正常',
            '面色红润，身体协调'
        ],
        advice: [
            '继续保持良好的生活习惯',
            '均衡饮食，适量运动',
            '规律作息，心情愉快',
            '定期体检，预防为主'
        ],
        color: 'sage'
    }
};

// 测评管理器
class QuizManager {
    constructor() {
        this.currentQuestion = 0;
        this.answers = [];
        this.scores = {
            tanshi: 0,
            qixu: 0,
            qizhi: 0,
            yuxue: 0,
            normal: 0
        };
        this.modal = null;
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        // 开始测试按钮
        const startButton = document.getElementById('startQuiz');
        if (startButton) {
            startButton.addEventListener('click', () => this.startQuiz());
        }
        
        // 关闭模态框
        document.addEventListener('click', (e) => {
            if (e.target.id === 'closeQuiz') {
                this.closeQuiz();
            }
        });
        
        // 点击模态框外部关闭
        document.addEventListener('click', (e) => {
            if (e.target.id === 'quizModal') {
                this.closeQuiz();
            }
        });
    }
    
    startQuiz() {
        this.resetQuiz();
        this.showModal();
        this.renderQuestion();
    }
    
    resetQuiz() {
        this.currentQuestion = 0;
        this.answers = [];
        this.scores = {
            tanshi: 0,
            qixu: 0,
            qizhi: 0,
            yuxue: 0,
            normal: 0
        };
    }
    
    showModal() {
        const modal = document.getElementById('quizModal');
        if (modal) {
            modal.classList.remove('hidden');
            this.modal = modal;
        }
    }
    
    closeQuiz() {
        if (this.modal) {
            this.modal.classList.add('hidden');
            this.modal = null;
        }
    }
    
    renderQuestion() {
        const content = document.getElementById('quizContent');
        if (!content) return;
        
        const question = quizData.questions[this.currentQuestion];
        const progress = ((this.currentQuestion + 1) / quizData.questions.length) * 100;
        
        content.innerHTML = `
            <div class="mb-6">
                <div class="flex justify-between items-center mb-4">
                    <span class="text-sm text-sage-600">问题 ${this.currentQuestion + 1} / ${quizData.questions.length}</span>
                    <span class="text-sm text-sage-600">${Math.round(progress)}%</span>
                </div>
                <div class="w-full bg-sage-200 rounded-full h-2">
                    <div class="bg-sage-600 h-2 rounded-full transition-all duration-300" style="width: ${progress}%"></div>
                </div>
            </div>
            
            <div class="mb-8">
                <h4 class="text-lg font-semibold text-sage-800 mb-6">${question.question}</h4>
                <div class="space-y-3">
                    ${question.options.map((option, index) => `
                        <button class="quiz-option w-full text-left p-4 rounded-lg border border-sage-200 hover:border-sage-400 hover:bg-sage-50 transition-colors" 
                                data-value="${option.value}" 
                                data-score="${option.score}">
                            ${option.text}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
        
        // 添加选项点击事件
        content.querySelectorAll('.quiz-option').forEach(button => {
            button.addEventListener('click', (e) => this.selectOption(e));
        });
    }
    
    selectOption(e) {
        const value = e.target.getAttribute('data-value');
        const score = parseInt(e.target.getAttribute('data-score'));
        
        // 记录答案
        this.answers.push({
            question: this.currentQuestion,
            value: value,
            score: score
        });
        
        // 累计得分
        this.scores[value] += score;
        
        // 视觉反馈
        e.target.classList.add('bg-sage-100', 'border-sage-500');
        
        // 延迟进入下一题
        setTimeout(() => {
            if (this.currentQuestion < quizData.questions.length - 1) {
                this.currentQuestion++;
                this.renderQuestion();
            } else {
                this.showResult();
            }
        }, 500);
    }
    
    calculateResult() {
        // 找出得分最高的体质类型
        let maxScore = 0;
        let resultType = 'normal';
        
        for (const [type, score] of Object.entries(this.scores)) {
            if (score > maxScore) {
                maxScore = score;
                resultType = type;
            }
        }
        
        // 如果所有得分都很低，则为平和体质
        if (maxScore < 8) {
            resultType = 'normal';
        }
        
        return constitutionTypes[resultType];
    }
    
    showResult() {
        const result = this.calculateResult();
        const content = document.getElementById('quizContent');
        
        content.innerHTML = `
            <div class="text-center">
                <div class="w-24 h-24 bg-${result.color}-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span class="text-3xl font-serif text-${result.color}-700">${result.name.charAt(0)}</span>
                </div>
                
                <h4 class="text-2xl font-serif font-semibold text-sage-800 mb-4">${result.name}</h4>
                <p class="text-sage-600 mb-8">${result.description}</p>
                
                <div class="text-left mb-8">
                    <h5 class="text-lg font-semibold text-sage-800 mb-4">主要特征：</h5>
                    <ul class="space-y-2 mb-6">
                        ${result.characteristics.map(char => `
                            <li class="flex items-start space-x-2">
                                <span class="w-2 h-2 bg-${result.color}-500 rounded-full mt-2 flex-shrink-0"></span>
                                <span class="text-sage-600">${char}</span>
                            </li>
                        `).join('')}
                    </ul>
                    
                    <h5 class="text-lg font-semibold text-sage-800 mb-4">调理建议：</h5>
                    <ul class="space-y-2 mb-6">
                        ${result.advice.map(advice => `
                            <li class="flex items-start space-x-2">
                                <span class="w-2 h-2 bg-sage-500 rounded-full mt-2 flex-shrink-0"></span>
                                <span class="text-sage-600">${advice}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
                
                <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                    <p class="text-sm text-yellow-800">
                        <strong>重要提醒：</strong> 此测试结果仅供参考，不能替代专业医师的诊断。如需具体调理方案，请咨询具有执业资格的中医师。
                    </p>
                </div>
                
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button onclick="quizManager.retakeQuiz()" class="bg-sage-700 hover:bg-sage-800 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                        重新测试
                    </button>
                    <button onclick="quizManager.closeQuiz()" class="bg-white hover:bg-sage-50 text-sage-700 px-6 py-3 rounded-lg font-medium border border-sage-300 transition-colors">
                        关闭
                    </button>
                </div>
            </div>
        `;
    }
    
    retakeQuiz() {
        this.startQuiz();
    }
}

// 初始化测评管理器
const quizManager = new QuizManager();

// 暴露到全局作用域
window.quizManager = quizManager;

