// 国际化支持

// 语言配置
const i18nConfig = {
    defaultLanguage: 'zh',
    fallbackLanguage: 'zh',
    supportedLanguages: ['zh', 'en']
};

// 国际化对象
const i18n = {
    currentLanguage: i18nConfig.defaultLanguage,
    translations: {},
    
    // 初始化
    async init() {
        // 检测浏览器语言
        const browserLang = this.detectBrowserLanguage();
        const initialLang = this.getSupportedLanguage(browserLang);
        
        // 加载语言文件
        await this.loadLanguage(initialLang);
        this.applyTranslations();
        this.setupLanguageSelector();
    },
    
    // 检测浏览器语言
    detectBrowserLanguage() {
        const lang = navigator.language || navigator.userLanguage;
        return lang.substring(0, 2).toLowerCase();
    },
    
    // 获取支持的语言
    getSupportedLanguage(lang) {
        return i18nConfig.supportedLanguages.includes(lang) ? lang : i18nConfig.defaultLanguage;
    },
    
    // 加载语言文件
    async loadLanguage(lang) {
        try {
            const response = await fetch(`./locale/${lang}.json`);
            if (!response.ok) {
                throw new Error(`Failed to load language file: ${lang}`);
            }
            this.translations[lang] = await response.json();
            this.currentLanguage = lang;
        } catch (error) {
            console.warn(`Failed to load language ${lang}, falling back to ${i18nConfig.fallbackLanguage}`);
            if (lang !== i18nConfig.fallbackLanguage) {
                await this.loadLanguage(i18nConfig.fallbackLanguage);
            }
        }
    },
    
    // 切换语言
    async changeLanguage(lang) {
        if (lang === this.currentLanguage) return;
        
        if (!this.translations[lang]) {
            await this.loadLanguage(lang);
        }
        
        this.currentLanguage = lang;
        this.applyTranslations();
        this.updateLanguageSelector();
        
        // 保存用户偏好
        localStorage.setItem('preferred-language', lang);
    },
    
    // 应用翻译
    applyTranslations() {
        const elements = document.querySelectorAll('[data-i18n]');
        const translations = this.translations[this.currentLanguage] || {};
        
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = translations[key];
            
            if (translation) {
                // 处理不同的元素类型
                if (element.tagName === 'INPUT' && element.type === 'text') {
                    element.placeholder = translation;
                } else if (element.tagName === 'META') {
                    element.content = translation;
                } else if (element.hasAttribute('title')) {
                    element.title = translation;
                } else if (element.hasAttribute('alt')) {
                    element.alt = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
        
        // 更新页面语言属性
        document.documentElement.lang = this.currentLanguage;
    },
    
    // 设置语言选择器
    setupLanguageSelector() {
        const selector = document.getElementById('languageSelector');
        if (selector) {
            selector.value = this.currentLanguage;
        }
    },
    
    // 更新语言选择器
    updateLanguageSelector() {
        const selector = document.getElementById('languageSelector');
        if (selector) {
            selector.value = this.currentLanguage;
        }
    },
    
    // 获取翻译文本
    t(key, defaultText = '') {
        const translations = this.translations[this.currentLanguage] || {};
        return translations[key] || defaultText || key;
    }
};

// 在DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', async function() {
    // 检查是否有保存的语言偏好
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang && i18nConfig.supportedLanguages.includes(savedLang)) {
        i18n.currentLanguage = savedLang;
    }
    
    await i18n.init();
});

// 暴露到全局
window.i18n = i18n;

