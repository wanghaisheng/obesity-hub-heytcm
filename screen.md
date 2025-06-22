# 页面内容和设计描述 (screen.md)

## 页面概览

**文件名**: `185-ancient-recipes-research.html`

该页面是一个专注于中医肥胖调理智慧的科普网站主页。它结合了传统中医知识与现代数据挖掘技术，旨在为用户提供个性化的健康管理新思路。页面设计现代、响应式，并使用了 Tailwind CSS 框架。

**主要字体**: 
- 衬线字体 (Serif): `Noto Serif SC` (用于标题)
- 无衬线字体 (Sans-serif): `Inter` (用于正文)

**主要颜色方案**:
- `sage` 系列颜色: 作为主色调，从浅到深（例如：`sage-50` 到 `sage-900`），用于背景、文本、边框和按钮等。
- `warm` 系列颜色: 作为辅助色调，从浅到深（例如：`warm-50` 到 `warm-900`），用于背景、卡片背景等。
- 其他辅助色: 蓝色、黄色、紫色、绿色、红色等，用于特定模块的背景、图标或文字，以区分不同体质类型或方剂属性。

## 页面结构与内容

页面通过多个独立区块清晰地组织内容，每个区块都聚焦于一个特定主题。

### 1. 导航栏 (Navigation Bar)
- **设计**: 顶部固定导航栏，包含网站名称（`古方新解`）、桌面端导航链接、语言切换器和移动端菜单按钮。
- **内容**: 链接到页面内各个主要部分（首页、古人说"胖"、身体的信号、中医好方、完整方剂、专家解读、数据揭秘、日常食疗科学、基础术语、河流隐喻、关于我们）。

### 2. 英雄区 (Hero Section - `#home`)
- **设计**: 全屏高度，渐变背景，带有浮动装饰性圆形元素，居中显示主要信息和CTA按钮。
- **内容**: 
  - **主标题**: `古方新解 探索中医肥胖调理智慧`
  - **副标题**: `揭秘千年古籍，为你的体重管理提供新思路`
  - **核心价值点**: 三个卡片展示网站的核心价值：`千年智慧`、`科学验证`、`个性化视角`。
  - **CTA 按钮**: `开始探索` 和 `了解研究`。

### 3. 古人说"胖" (Ancient Wisdom Section - `#ancient-wisdom`)
- **设计**: 白色背景，居中标题和副标题，内容卡片布局。
- **内容**: 
  - **标题**: `肥胖：古人眼中的"身体失衡"`
  - **古人称谓**: 展示古籍中对肥胖的称谓，如 `肥人`、`膏人`、`脂人`、`脾瘅`，并提供简要描述和提及次数。
  - **古籍记载的健康问题**: 展示与肥胖相关的健康问题，如 `气机不畅`（中风、眩晕）、`妇科疾病`（月经不调、不孕）、`消化问题`（痞满、虚劳），并附带现代医学解释。

### 4. 身体的信号 (Body Signals Section - `#body-signals`)
- **设计**: 浅 `sage` 背景，居中标题和副标题，每个体质类型一个独立卡片，包含图标、频率、描述、常见表现和提示。
- **内容**: 
  - **标题**: `肥胖的"根源"：你的身体正在说什么？`
  - **五大内在失衡体质**: 详细描述 `痰湿体质`、`膏浊体质`、`气滞体质`、`气虚体质`、`瘀血体质`、`热证体质`。每种体质都包含：
    - 体质名称和图标。
    - 在古籍中被提及的频率。
    - 通俗易懂的描述。
    - 常见表现。
    - 小贴士。
  - **体质测评**: 一个 `简易体质自测` 模块，包含 `开始测试` 按钮和免责声明。

### 5. 中医好方 (TCM Solutions Section - `#tcm-solutions`)
- **设计**: 白色背景，居中标题和副标题，核心原则、经典方剂和明星药材以卡片或列表形式展示。
- **内容**: 
  - **标题**: `古代医家的"秘方"：如何平衡内在，告别肥胖？`
  - **中医调理核心原则**: 强调 `辨证施治` 和 `一人一方，因证施治`。
  - **经典方剂**: 展示 `二陈汤`、`六君子汤`、`四物汤` 三个经典方剂，包括名称、描述和主治功效。
  - **明星药材**: 列出高频使用的药材，如 `半夏`、`陈皮`、`茯苓`、`甘草`、`人参`，并简要描述其功效。
  - **药材属性**: 介绍 `四气` (寒凉、温热、平性) 和 `五味` (甘、苦、辛、酸、咸) 的概念及作用。
  - **重要提醒**: 强调方剂使用需在专业中医师指导下进行。

### 6. 完整方剂购买部分 (Recipes Section - `#recipes`)
- **设计**: 渐变背景，产品展示区域左右布局，包含产品描述、价格、购买按钮和保障信息。客户评价以三列卡片形式展示。
- **内容**: 
  - **标题**: `完整古方宝典：185个传统肥胖调理方剂`
  - **产品展示**: 
    - **产品名称**: `《古方新解：185方剂精编》`
    - **描述**: 基于数据挖掘的方剂精选。
    - **包含内容**: 185个完整配方、体质分类方案、功效机理解析、现代应用指导、专业团队注释。
    - **价格**: `¥198` (原价 `¥398`)，限时特惠。
    - **购买按钮**: `立即购买` (链接到 `recipes-content.html`)
    - **保障信息**: 7天无条件退款、安全支付保障、即时下载 PDF 格式。
  - **客户评价**: 三个用户评价，包含星级和评论文本。
  - **最终提醒**: 强调资料仅供学术研究和教育参考，非医疗建议。

### 7. 专家解读部分 (Expert Insights Section - `#expert-insights`)
- **设计**: 浅 `sage` 背景，居中标题和副标题，研究价值、整体观和生活智慧以网格或列表形式展示。
- **内容**: 
  - **标题**: `中西医结合：开启肥胖管理新篇章`
  - **研究创新价值**: 四个要点：数据挖掘技术应用、古籍智慧系统化、现代应用价值、个性化医疗启发。
  - **中医整体观的现代价值**: 三个要点：情绪与健康、生活方式医学、代谢平衡。
  - **生活中的中医智慧**: 三个方面：饮食调理、运动养生、情绪管理，包含具体建议。
  - **重要声明**: 再次强调所有信息仅供科普参考，非医疗建议。

### 8. 数据揭秘部分 (Data Insights Section - `#data-insights`)
- **设计**: 白色背景，居中标题和副标题，数据挖掘流程和研究成果亮点以图文结合方式展示。
- **内容**: 
  - **标题**: `科技之光：如何从古籍中"挖"出健康密码？`
  - **数据挖掘介绍**: 解释数据挖掘概念，并列举研究数据来源 (`《中华医典》`)、筛选过程和规律发现方法。
  - **研究成果亮点**: 以数据形式展示成果：`185` 经典方剂、`253` 中药材、`72` 相关疾病、`74` 证型组合。
  - **研究的创新性**: 强调研究的国内外首次和作为古今桥梁的意义。

### 9. 关于我们部分 (About Us Section - `#about`)
- **设计**: 白色背景，居中标题和副标题，团队信息和研究方法愿景左右布局。
- **内容**: 
  - **标题**: `追溯千年，数据新生：我们的研究之旅`
  - **heytcm数据挖掘团队信息**: 介绍主要数据挖掘专家（颜焱、燕树勋教授）和 heytcm 数据挖掘平台。
  - **研究创新**: 包含研究目的、研究方法（海量古籍文献数字化处理、现代数据挖掘算法、提取诊疗规律、建立知识体系）和愿景。

### 10. 页脚 (Footer)
- **设计**: 深色背景，四列布局包含网站信息、快速链接、法律信息和版权声明。
- **内容**: 
  - **网站信息**: 网站名称、描述和社交媒体链接。
  - **快速链接**: 页面内导航链接以及未来功能（个性化方案工具、断食管理App）的预告。
  - **法律信息**: 隐私政策、使用条款、联系我们、免责声明的链接。
  - **底部版权**: 版权声明和学术声明。

## 其他功能

- **国际化 (i18n)**: 页面支持多语言切换 (`zh` 中文, `en` 英文)，通过 `data-i18n` 属性实现。
- **滚动到指定部分**: 导航链接和CTA按钮支持平滑滚动到页面内相应区块。
- **回到顶部按钮**: 页面滚动后在右下角显示，方便用户快速返回页面顶部。
- **体质测评模态框**: 一个隐藏的模态框，用于显示 `简易体质自测` 的内容，通过 JavaScript 动态插入。

## 文件概览

**文件名**: `weight-loss-method-comparison.html`

该页面旨在对比各种常见的减肥方法，并着重强调中医在体重管理方面的独特优势和深层原理。页面设计直观，通过表格、卡片和图表清晰展现不同方法的特点及中医的优越性。

**主要字体**: 
- 衬线字体 (Serif): `Noto Serif SC` (用于标题)
- 无衬线字体 (Sans-serif): `Inter` (用于正文)

**主要颜色方案**:
- `sage` 系列颜色: 作为主色调，从浅到深，用于背景、文本、边框和按钮等。
- `warm` 系列颜色: 作为辅助色调，从浅到深，用于背景、卡片背景等。
- `accent-red`: 用于强调和警示信息。

## 页面结构与内容

页面通过多个独立区块清晰地组织内容，每个区块都聚焦于一个特定主题。

### 1. 导航栏 (Navigation Bar)
- **设计**: 顶部固定导航栏，包含网站名称（`古方新解`）、桌面端导航链接、语言切换器和移动端菜单按钮。
- **内容**: 链接到 `index.html` (首页), `index.html` (中医智慧), `weight-loss-method-comparison.html` (方法对比)。

### 2. 快速导航 (Quick Navigation)
- **设计**: sticky 导航条，位于主导航下方，提供页面内快速跳转链接。
- **内容**: 链接到 `概览`、`减肥困境`、`常见方法`、`中医方案`、`数据对比`。

### 3. 英雄区 (Hero Section - `#hero-comparison`)
- **设计**: 渐变背景，带有浮动装饰性圆形元素，居中显示主标题和副标题，以及CTA按钮。
- **内容**: 
  - **主标题**: `减肥之路多歧途，中医指引长久计`
  - **副标题**: `市面上的减肥方法琳琅满目，但真正能持久、健康、且不添堵的却寥寥无几。本页将带您深入剖析各种方法的利弊，并揭示为何中医智慧能为您指明一条更明智的道路。`
  - **CTA 按钮**: `开始对比探索` (链接到 `#method-comparison`)

### 4. 快速概览表格 (Quick Overview Table - `#overview`)
- **设计**: 响应式表格，展示不同减肥方法的原理、适用人群、注意事项和效果持久度。
- **内容**: 对比 `饮食控制`、`运动锻炼`、`中医调理`。

### 5. 减肥的普遍困境 (The Challenge Section - `#challenge`)
- **设计**: 白色背景，居中标题和副标题，采用"堵塞的下水道"比喻。
- **内容**: 
  - **标题**: `减肥的普遍困境："堵塞的下水道"`
  - **描述**: 将肥胖比作房屋中"堵塞的下水道"，解释身体机能失调导致废物堆积，并指出常见减肥方法治标不治本。

### 6. 方法对比部分 (Method Comparison Section - `#method-comparison`)
- **设计**: 浅 `warm` 背景，居中标题，并提供"下水道比喻"和"专业说明"两种视图切换。每种方法以卡片形式展示，包含标题、简述、核心问题和详细困扰。
- **内容**: 对比 `饮食控制`、`运动锻炼`、`减肥药物`、`减肥手术`、`减肥补充剂`。每个卡片都可以在"下水道比喻"和"专业说明"之间切换显示。

### 7. 中医：根本修复 (TCM: The Foundation Repair - `#tcm-solution`)
- **设计**: 白色背景，居中标题和副标题，同样提供"下水道比喻"和"专业说明"两种视图切换。中医优势以列表形式展示，并配有插图。
- **内容**: 
  - **标题**: `中医智慧：从根本上"疏通并养护整个排水系统"`
  - **描述**: 详细阐述中医如何从根本上调理身体，解决肥胖的深层原因，并通过"通渠养护师傅"的比喻形象化解释。
  - **中医减肥的独特优势/科学解读**: 
    - `个性化诊断，精准"通渠" / 辩证论治：精准干预个体差异`
    - `温和养护，避免"管道损伤" / 天然草本与多靶点调节`
    - `源头治理，改善"水质"与"水流" / 改善肠道微生态与炎症反应`
    - `效果持久，降低"复堵"风险 / 情绪与压力管理，打破"恶性循环"`
    - `综合调理，提升整体健康 / 促进能量代谢与循环`

### 8. 数据对比图表 (Comparison Chart Section - `#comparison-chart-section`)
- **设计**: 浅 `warm` 背景，包含一个Canvas图表用于展示雷达图，以及一个详细的对比数据表格。
- **内容**: 
  - **标题**: `减肥方法多维度对比`
  - **雷达图**: 通过 `Chart.js` 动态生成，对比各项减肥方法在可持续性、副作用、社交友好度、心理支持、个性化和不扰乱饮食等维度的评分。
  - **详细对比数据表格**: 提供具体的分数数据。

### 9. 为什么选择中医 / CTA (Why TCM / Call to Action - `#why-tcm`)
- **设计**: 渐变背景，居中显示CTA标题、副标题和按钮。
- **内容**: 
  - **标题**: `厌倦了周而复始的减肥困扰？`
  - **副标题**: 强调中医是解决根本问题、实现持久健康的选择。
  - **CTA 按钮**: `了解更多中医智慧` (链接到 `index.html`)

### 10. 页脚 (Footer)
- **设计**: 深色背景，四列布局，包含网站信息、快速链接、法律信息和版权声明。
- **内容**: 同 `185-ancient-recipes-research.html`。

## daily-food-alternative.html

**Purpose:** This page serves as a comprehensive resource focusing on the scientific research behind Traditional Chinese Medicine (TCM) principles for obesity management. It leverages data mining and network pharmacology to identify active components in everyday foods and traditional Chinese herbs, outlining their specific gene targets and mechanisms of action. The goal is to bridge ancient wisdom with modern scientific understanding, providing actionable dietary and lifestyle recommendations based on robust research.

**Fonts & Color Scheme:**
*   **Fonts:** The page utilizes a modern, clean sans-serif font for body text to ensure readability, complemented by a sophisticated serif font for headings (e.g., "核心成分", "天然来源研究发现"), adding an authoritative and traditional touch.
*   **Color Scheme:** The palette is inspired by natural and scientific themes, featuring various shades of green (e.g., `bg-green-100`, `text-green-800`), blue (`bg-blue-100`, `text-blue-600`), purple (`bg-purple-100`, `text-purple-600`), orange (`bg-orange-50`, `text-orange-600`), amber (`bg-amber-50`, `text-amber-600`), and teal (`bg-teal-50`, `text-teal-500`). These colors are used consistently across cards, icons, and text to differentiate sections and highlight key information, creating a visually appealing and organized layout.

**Detailed Breakdown of Sections:**

1.  **Hero Section:** Introduces the page's core theme: the scientific exploration of daily food alternatives and TCM for obesity. It sets a scholarly yet accessible tone.

2.  **Key Findings/Insights (核心洞察):** This section immediately presents the scientific approach—data mining and network pharmacology—and the main discoveries, such as the identification of active components and their gene targets. It features visually distinct cards for "常见方剂中药" (Common Herbs), "核心成分" (Core Components), and "关键靶点" (Key Targets), each with a relevant icon and a list of items (e.g., 山楂, 槲皮素, TP53).

3.  **Detailed Analysis of Core Components (核心成分详细分析):** A prominent, scrollable table (`overflow-x-auto`) provides in-depth information for each core active component (槲皮素/Quercetin, 山柰酚/Kaempferol, 异鼠李素/Isorhamnetin, 芒柄花黄素/Formononetin, β-谷甾醇/Beta-sitosterol, 柚皮素/Naringenin). For each component, the table lists:
    *   Predicted Key Targets (e.g., TP53, JUN, AKT1, STAT3, IL6).
    *   Brief Predicted Mechanism (e.g., 调节脂质代谢，抑制脂肪细胞增殖分化).
    *   Source Category (e.g., 蔬菜, 水果, 谷物/豆类, 茶叶/花草茶, 蜂产品, 药用/特殊植物).
    *   Common Dietary/Other Sources (e.g., 洋葱、大葱、菠菜).
    *   Specific Examples from provided texts (e.g., 红皮洋葱、大葱、鱼腥草).
    The table structure effectively organizes complex scientific data into an easily digestible format.

4.  **Natural Sources Research Findings (天然来源研究发现):** This section categorizes natural sources rich in core components into three main groups:
    *   **日常可食用 (Daily Edible Plants):** Features items like 沙棘果, 枸杞, 沙棘叶茶.
    *   **传统中药材 (Traditional Chinese Herbs):** Includes 槐花/槐米, 桑寄生, 菟丝子.
    *   **其他植物源 (Other Plant Sources):** Lists 雪松果, 雪松松针, 沙棘籽粕.
    Each item is presented in a card with a corresponding icon and colored circles indicating the presence of Quercetin, Kaempferol, or Isorhamnetin, visually explaining the "三种核心成分标识" (Three Core Component Identifiers) legend.

5.  **Recommended Extracts/Products:** This section suggests practical applications of the research, divided into "推荐日常摄入" (Recommended Daily Intake) such as沙棘果汁, 枸杞泡茶 and "专业提取物" (Professional Extracts) like银杏叶标准化提取物, 沙棘黄酮浓缩制品, and 参杞酒, guiding users on how to incorporate these beneficial components.

6.  **Quercetin Rich Sources Guide (槲皮素丰富来源指南):** A dedicated section with a distinct icon and subtitle, offering a comprehensive list of scientifically verified natural sources of Quercetin. It further subdivides into "日常食材类" (Common Food Categories - Vegetables, Teas, Fruits/Flowers) and "中药材类" (Traditional Chinese Herb Categories - Common Herbs, Ethnic Medicines, Local Specialties), followed by "特殊来源分类" (Special Source Categories - Wild Plants, Woody Plants, Other Special Sources). It also provides "实用摄取建议" (Practical Intake Advice) and a "高槲皮素含量推荐清单" (High Quercetin Content Recommended List) table with categories, recommended sources, availability, and usage suggestions.

7.  **Kaempferol Quality Sources Guide (山柰酚优质来源指南):** Structured similarly to the Quercetin guide, this section focuses on Kaempferol. It covers "日常食材类" (Grain/Teas, Vegetable Leaves) and "中药材类" (Traditional Medicines, Wild Medicines), with a special "蕨类植物专区" (Ferns Zone) highlighting specific research. It also includes "制剂来源" (Formulations Source), "含量特点分析" (Content Analysis), and a "山柰酚优选推荐清单" (Kaempferol Preferred Recommended List) table.

8.  **Practical Intake Plans (核心成分实用摄取方案):** This section provides actionable advice on integrating the core components into daily life, divided into three plans: "日常摄入方案" (Daily Intake Plan), "食疗调理方案" (Dietary Therapy Plan), and "专业指导方案" (Professional Guidance Plan), each with specific suggestions.

9.  **Integrated Health Solutions (综合健康解决方案):** This section offers broader health guidelines rooted in TCM research, presented as distinct cards for "均衡多样化饮食" (Balanced Diverse Diet), "注重植物性食物" (Focus on Plant-Based Foods), "合理烹饪方式" (Rational Cooking Methods), "替代性选择" (Alternative Choices), "生活方式调整" (Lifestyle Adjustment), and "个体化考量" (Individualized Consideration). An "重要提示" (Important Note) disclaimer is included.

10. **Isorhamnetin Quality Sources Guide (异鼠李素优质来源指南):** Similar detailed guide for Isorhamnetin, with daily food categories (vegetables, fruits, grains/legumes, teas/herbal teas, bee products) and medicinal/special plants, content analysis, and a recommended list.

11. **Formononetin Quality Sources Guide (芒柄花黄素优质来源指南):** Detailed guide for Formononetin, with daily food categories (legumes) and medicinal plants, content analysis, and a recommended list.

12. **Beta-sitosterol Quality Sources Guide (β-谷甾醇优质来源指南):** Detailed guide for Beta-sitosterol, with daily food categories (nuts/seeds, plant oils, other foods) and medicinal plants/plant extracts, content analysis, and a recommended list.

13. **Naringenin Quality Sources Guide (柚皮素优质来源指南):** Detailed guide for Naringenin, with daily food categories (citrus fruits) and medicinal plants, content analysis, and a recommended list.

14. **Footer:** The footer provides standard website information, including "快速链接" (Quick Links) to other relevant pages like `185-ancient-recipes-research.html`, `modern-recipe.html`, and `glossary.html`, "法律信息" (Legal Information) with links to privacy policy and terms of use, and copyright details. Social media icons (WeChat, Weibo) are also included.

Overall, `daily-food-alternative.html` is a rich, scientifically-oriented page that effectively translates complex research into practical, accessible information, guiding users on how to leverage natural sources and TCM principles for health management.

## ancient-recipes-database.html

**Purpose:** This page functions as a comprehensive, searchable database of 185 ancient Traditional Chinese Medicine (TCM) prescriptions related to obesity management. It aims to make classical medical texts accessible and understandable by providing detailed information on herbal compositions, therapeutic effects, and guidance for modern applications, all validated through data mining from "《中华医典》" (Chinese Medical Encyclopedia).

**Fonts & Color Scheme:**
*   **Fonts:** Similar to other pages, it uses `Noto Serif SC` for headings (e.g., "完整古方宝典：185方剂精编") to convey a sense of tradition and authority, while `Inter` serves as the clean, readable sans-serif font for body text.
*   **Color Scheme:** The page primarily uses a "sage" color palette (various shades of green-gray, e.g., `sage-800`, `sage-700`, `sage-100`, `sage-50`). This is complemented by a "warm" background (`bg-warm-50`) for a soft, inviting feel, and accent colors for different sections: red for "相关疾病" (Related Diseases), blue for "中医证型分类" (TCM Syndrome Classifications), green for "经典方剂" (Classic Prescriptions), and yellow for "中药材大全" (Chinese Herbal Medicine Compendium). This color coding helps visually distinguish content categories.

**Detailed Breakdown of Sections:**

1.  **Navigation Bar:** A sticky navigation bar at the top, consistent with the site's branding, features links to Home, Ancient Wisdom, Body Signals, TCM Solutions, Expert Insights, and About Us. "完整方剂" (Complete Prescriptions) is highlighted, indicating the current page.

2.  **Page Title & Subtitle (Hero Section):** A prominent central section with a large title "完整古方宝典：185方剂精编" and a subtitle "基于《中华医典》数据挖掘研究的完整数据库". It includes a badge "heytcm数据挖掘验证" (heytcm Data Mining Verified) to emphasize the scientific validation.

3.  **Search and Filter:** A crucial interactive section allowing users to search by keyword (方剂, 药材, 病症) and filter content by category (全部内容, 相关疾病, 证型分类, 经典方剂, 药材大全). Users can also sort results by "使用频率" (Usage Frequency), "字母顺序" (Alphabetical Order), or "分类排序" (Category Order). This section is designed for easy navigation through the extensive database.

4.  **Content Blocks (Dynamic Sections):** The main body is divided into dynamically generated sections, each representing a category of information from the ancient texts:
    *   **肥胖相关疾病 (Obesity Related Diseases):** Lists 72 types of diseases and symptoms related to obesity, with a brief description and a grid display that will be populated by JavaScript.
    *   **中医证型分类 (TCM Syndrome Classifications):** Details 74 types of TCM syndromes, explaining their relevance to obesity and featuring a list structure to be dynamically generated.
    *   **经典方剂 (Classic Prescriptions):** Presents 185 classic prescriptions used for obesity, with a description and a grid for dynamic content display.
    *   **中药材大全 (Chinese Herbal Medicine Compendium):** Offers a comprehensive list of 253 Chinese medicinal herbs used in obesity management, with a description and a grid for dynamic content.
    Each section has a distinct title, icon, and a count of items, providing a clear overview of the data available.

5.  **Usage Guide (重要使用指南):** A prominent yellow-themed alert box contains critical disclaimers and guidance for using the database. It emphasizes that the database is for academic and learning reference only, not for self-diagnosis or treatment, and stresses the importance of professional guidance from qualified TCM practitioners. It also highlights that the data is from ancient texts and modern application requires individualized consideration and modern medical diagnosis.

6.  **Footer:** A consistent footer providing site information, quick links (including those to `185-ancient-recipes-research.html`, `modern-recipe.html`, and `glossary.html`), legal information (privacy policy, terms of use, contact, disclaimer), and copyright details. Social media icons (WeChat, Weibo) are also present.

Overall, `ancient-recipes-database.html` is a well-structured and functional page designed to provide a comprehensive, scientifically-backed, and user-friendly resource for exploring ancient TCM knowledge related to obesity, while responsibly guiding its application.

## glossary.html

**Purpose:** This page functions as a comprehensive glossary of fundamental Traditional Chinese Medicine (TCM) terms. Its primary goal is to help users, especially those new to TCM, understand core concepts like Qi, Blood, Body Fluids, Zang-Fu Organs, and Pathogenesis. This ensures a clearer comprehension of other content on the site that relies on these foundational terms.

**Fonts & Color Scheme:**
*   **Fonts:** The page consistently uses `Noto Serif SC` for its main title ("中医基础术语精解") to reflect the traditional nature of the content and `Inter` for body text, ensuring modern readability.
*   **Color Scheme:** The design employs a `sage` color palette (e.g., `sage-900`, `sage-800`, `sage-700`, `sage-100`, `sage-50`) for headings, links, and accents, creating a calm and authoritative feel. The background is a soft `warm-50` shade, contributing to a pleasant reading experience. This aligns with the site's overall aesthetic, emphasizing natural and traditional elements.

**Detailed Breakdown of Sections:**

1.  **Header (SEO & Schema.org):** The `<head>` section includes comprehensive SEO meta tags (title, description, keywords) and Open Graph properties for social media sharing. Crucially, it incorporates Schema.org JSON-LD for a `WebPage` type, enhancing its discoverability and semantic understanding by search engines. This indicates a well-optimized page designed for broader reach and accessibility.

2.  **Navigation Bar:** A sticky navigation bar is present at the top, featuring links to `index.html` (Home), `ancient-recipes-database.html` (Ancient Recipes), `modern-recipe.html` (Modern Recipes), `daily-food-alternative.html` (Daily Food Science), `glossary.html` (Basic Terms - highlighted as active), `river-metaphor.html` (River Metaphor), and About Us. A language selector (Chinese/English) and a mobile menu button are also integrated, ensuring responsiveness and user convenience.

3.  **Glossary Content Area (Main):** This is the central part of the page, where the main title "中医基础术语精解" (Interpretation of Basic TCM Terms) is prominently displayed. The actual glossary content, including definitions of terms like "气" (Qi), "血" (Blood), "津液" (Body Fluids), "脏腑" (Zang-Fu Organs), "病因" (Pathogenesis), and "病机" (Pathological Mechanisms), is dynamically rendered here by JavaScript using `glossary-data.js` and `glossary-renderer.js`. This approach allows for efficient management and display of a potentially large number of terms.

4.  **Footer:** A standard footer is included, providing general site information, quick navigation links (consistent with the main navigation), legal information (Privacy Policy, Terms of Use, Contact, Disclaimer), and copyright details. Social media icons (WeChat, Weibo) are also present.

Overall, `glossary.html` is a well-structured and semantically rich page designed to be an accessible educational resource for TCM terminology. Its dynamic content rendering and comprehensive SEO setup contribute to its usability and discoverability.

## terms.html

**Purpose:** This page outlines the Terms of Service for the website. It specifies the agreement between the user and the service provider, covering aspects like service usage, privacy, user responsibilities, and limitations of liability.

**Fonts & Color Scheme:**
*   **Fonts:** The page uses a generic `Arial, sans-serif` font for all text, indicating a straightforward and functional design. This choice prioritizes readability over specific stylistic elements.
*   **Color Scheme:** The design is minimalistic, featuring a light gray background (`#f0f0f0`), white content containers (`#fff`), and dark gray text (`#333`, `#555`). This simple, clean palette ensures the focus remains on the legal text, avoiding distractions.

**Detailed Breakdown of Sections:**

1.  **Header (SEO & Analytics):** The `<head>` section is robust, including standard SEO meta tags (description, keywords, author), Open Graph properties for social media (title, description, image, URL, type), and Twitter Card meta tags. It also integrates Google Analytics and Microsoft Clarity scripts, indicating a focus on tracking user engagement and site performance. A canonical link is dynamically generated, suggesting multi-language support based on `config.json`.

2.  **Main Content Container:** The `terms-container` div holds the primary content. It includes a main title "Terms of Service" and an effective date. The content is broken down into several key sections, each with a clear heading:
    *   **1. Introduction:** Welcomes users and states their agreement to the terms upon using the service.
    *   **2. Use of Service:** Outlines user compliance with laws and warns against unauthorized or abusive use.
    *   **3. Privacy Policy:** Directs users to the dedicated Privacy Policy page for detailed information on data protection.
    *   **4. User Responsibilities:** Highlights user accountability for their actions and prohibits harmful activities on the platform.
    *   **5. Limitation of Liability:** States that the service provider is not responsible for damages or losses incurred from service use.
    *   **6. Changes to the Terms:** Informs users that terms may be updated, with changes posted on the page immediately taking effect.
    The page concludes with a contact email for inquiries and includes a small placeholder image.

3.  **Footer:** A simple footer containing a copyright notice for "HeyManifestation." (Note: This is a discrepancy with the `heytcm` project and suggests this file might be a template from another project or a placeholder that needs updating).

**Discrepancy Note:** The content of `terms.html` refers to "Vision Board by HeyManifestation" and its associated URLs and copyright. This suggests that this `terms.html` file might be a generic template or a remnant from a different project and should be reviewed and updated to reflect the `heytcm` project's specific terms and branding.

Overall, `terms.html` is a functional, legally-focused page designed for clarity and compliance, despite the existing branding discrepancy.

## privacy.html

**Purpose:** This page outlines the Privacy Policy for the website, detailing how user data is collected, used, shared, and protected. It aims to inform users about their rights regarding their personal information.

**Fonts & Color Scheme:**
*   **Fonts:** The page uses a generic `Arial, sans-serif` font, prioritizing readability for legal content. The font choice is straightforward and functional.
*   **Color Scheme:** The design is simple and clean, with a light gray background (`#f5f5f5`), white content sections (`#fff`), and dark gray text (`#333`, `#555`). The header has a distinct green background (`#4CAF50`) with white text, providing a clear visual separation. This minimalistic palette keeps the focus on the policy text.

**Detailed Breakdown of Sections:**

1.  **Header (SEO & Analytics):** The `<head>` section includes comprehensive SEO meta tags (description, keywords, author) and Open Graph/Twitter Card properties for social media sharing. It also integrates Google Analytics and Microsoft Clarity scripts, indicating a focus on tracking user engagement and site performance. A canonical link is dynamically generated, suggesting multi-language support based on `config.json`.

2.  **Introduction Section:** This section provides an overview of the Privacy Policy, stating its purpose and requiring user agreement to the terms, including an age restriction (over 16 or parental consent).

3.  **Personal Data Controller:** Identifies "HeyManifestation" as the data controller, providing an email and website for contact. (Note: This is a discrepancy with the `heytcm` project and suggests this information needs updating).

4.  **Information We Collect:** Details the types of data collected when using the service:
    *   **Personal Information:** Name, email, and other provided details.
    *   **Usage Data:** Information on app usage, frequency, and device.
    *   **Cookies and Tracking Technologies:** Explanation of their use for user experience and tracking.

5.  **How We Use Your Data:** Explains the purposes for data collection: providing, operating, maintaining, improving, personalizing, expanding, and communicating about the service, as well as monitoring usage and preventing abuse.

6.  **Data Sharing:** Assures users that personal information is not sold, rented, or traded, but may be shared with third-party service providers or if legally required.

7.  **Your Rights:** Outlines user rights, including accessing, correcting, or deleting personal data, and withdrawing consent for processing.

8.  **Footer:** A simple footer containing a copyright notice for "HeyManifestation." (Note: This is a discrepancy with the `heytcm` project and suggests this file might be a template from another project or a placeholder that needs updating).

**Discrepancy Note:** The content of `privacy.html` refers to "Vision Board by HeyManifestation" and its associated URLs and copyright. This suggests that this `privacy.html` file might be a generic template or a remnant from a different project and should be reviewed and updated to reflect the `heytcm` project's specific privacy policy and branding.

Overall, `privacy.html` is a functional, legally-focused page designed for transparency regarding data handling, despite the existing branding discrepancy.

## modern-recipe.html

**Purpose:** This page presents a comprehensive overview of modern Traditional Chinese Medicine (TCM) weight management solutions, grounded in rigorous scientific research. Its aim is to provide users with scientifically validated, safe, and effective personalized weight loss strategies, moving beyond conventional, often ineffective, dieting methods.

**Fonts & Color Scheme:**
*   **Fonts:** The page utilizes a sophisticated combination of `Noto Serif SC` for headings (e.g., "告别无效减肥") to evoke a sense of authority and tradition, and `Inter` for body text, ensuring a clean and modern readability. This blend supports the page's objective of bridging traditional wisdom with modern science.
*   **Color Scheme:** The color palette primarily uses `sage` and `warm` tones (various shades of green-gray and warm beige, respectively, like `sage-50`, `warm-100`) for backgrounds and text, creating a calming and inviting atmosphere. Accent colors, notably `primary-red` (`#E53935`) and `accent-red` (`#E63946`) are strategically used for call-to-action buttons, urgency banners, and highlighting key pricing information, drawing the user's attention to critical elements.

**Detailed Breakdown of Sections:**

1.  **Header (SEO & Schema.org):** The `<head>` section is rich with SEO meta tags (title, description, keywords), Open Graph properties for social media (title, description, image, URL, type), and Twitter Card meta tags. Crucially, it includes Schema.org JSON-LD for a `MedicalWebPage` type, identifying "heytcm Research Team" as the publisher and "肥胖症" (Obesity) as the `MedicalCondition` about which the page provides information. This extensive metadata enhances discoverability and semantic understanding by search engines.

2.  **Navigation Bar:** A sticky navigation bar, consistent with the site's overall design, provides links to Home, Problem Analysis, Solutions, Authority & Trust, and Pricing. A language switcher (Chinese/English) and a mobile menu button ensure responsiveness and user convenience.

3.  **Hero Section:** This prominent section features an urgent banner ("限时发布：首次公开的现代中医药体重管理研究成果！"), a compelling main title ("告别无效减肥：科学揭秘现代中医药体重管理方案，从根源重塑健康体态！"), and a detailed subtitle highlighting the research's origins (3000+ literature, 1000+ theses, integration of acupuncture, massage, and lifestyle interventions). Key statistics (e.g., "3000+ 研究文献", "1000+ 硕博士论文") are displayed in visually appealing cards. A strong call-to-action button ("立即获取完整方案，开启健康瘦身之旅！") and trust badges reinforce credibility.

4.  **Problem Amplification Section:** This section delves into the shortcomings of traditional weight loss methods. It lists common "痛点" (pain points) such as neglecting root causes, fragmented information, lack of systematic approaches, and inconsistent results, using a red-themed background and icons to emphasize the issues. A "震撼数据" (Shocking Data) box highlights the high rate of failed long-term weight management, concluding with "问题不在你，而在方法！" (The problem isn't you, it's the method!).

5.  **Solution Revelation Section:** Introduces the groundbreaking modern TCM weight management solutions. It explains the research methodology, emphasizing the use of data mining from extensive medical databases (NCBI, CNKI, Weipu) and academic theses. It outlines "核心发现" (Core Discoveries), such as the multi-dimensional, personalized, and evidence-based nature of the solutions, and presents "独家数据洞察" (Exclusive Data Insights) with statistics on categories of modern methods, related theories, and research effort. A "Why Reveal Now" sub-section explains the urgency and societal benefit of releasing these findings.

6.  **Authority & Trust Building Section:** Reinforces the credibility of the research team. It highlights "数据驱动与技术优势" (Data-Driven & Technical Advantages) of the heytcm research team, emphasizing their multidisciplinary expertise and rigorous scientific process. "研究创新性" (Research Innovativeness) discusses the novelty of their data-driven discoveries and future-oriented health solutions. This section also features customer testimonials with verified purchase indicators.

7.  **Value Proposition & Offer Section:** Presents the core product, "《现代中医药体重管理方案数据库》" (Modern TCM Weight Management Solution Database), with a limited release banner. It details what users will receive (5 categories of methods, hundreds of specific treatments, detailed mechanisms, evidence, expert annotations). It then outlines three pricing tiers (Basic, Standard, Professional), each with different features and pricing, highlighting the "Standard" tier as "最受欢迎" (Most Popular). Payment guarantees (instant access, secure payment, 7-day refund) are displayed. An urgency and scarcity message (limited to 100 buyers, price revert after 24 hours) is included with a real-time counter and progress bar.

8.  **Urgency & Scarcity Tactics Section:** This section reiterates the limited-time offer with a prominent countdown timer (days, hours, minutes, seconds). It further emphasizes the scarcity of the offer and directs users to take immediate action through a large call-to-action button, accompanied by payment method logos (Alipay, WeChat Pay, UnionPay).

9.  **Risk Reversal Guarantee Section:** Provides a strong 7-day no-questions-asked refund guarantee, aiming to reduce user hesitation. It includes a guarantee badge and a call-to-action to encourage immediate purchase.

10. **FAQ Section:** Addresses common questions regarding customer support, content updates, and applicability of the methods, reiterating the need for professional medical consultation.

11. **Final Call to Action Section:** A concluding section that reinforces the urgency and value of the offer, prompting users to purchase before the limited-time discount expires.

12. **Post-Footer Upsell Section:** Features additional related products/solutions, such as "古方新解：185古方数据库" (Ancient Recipes Decoded: 185 Ancient Prescriptions Database) and "个性化体重管理膳食工具" (Personalized Weight Management Dietary Tool), often with discounted bundle offers, encouraging further engagement.

**Footer:** The footer is consistent across the site, providing site information, quick links, legal information, and copyright details.

Overall, `modern-recipe.html` is a highly persuasive and information-rich landing page designed to educate users on modern TCM weight management and drive conversions. It strategically combines scientific authority, problem-solution framing, social proof, and urgency tactics to guide the user through the sales funnel.

## 185-ancient-recipes.html

**Purpose:** This page functions as a dedicated sales and landing page for the "《古方新解：185方剂完整数据库》" product. Its primary goal is to persuade users to purchase the database by highlighting the limitations of conventional weight loss methods, revealing the unique scientific insights from ancient TCM texts, building authority and trust, and creating a sense of urgency and scarcity around the offer.

**Fonts & Color Scheme:**
*   **Fonts:** The page uses a combination of `Noto Serif SC` for headings (e.g., "终于揭秘：解锁您持久健康的古老秘密") to convey tradition and authority, and `Inter` for body text, ensuring modern readability.
*   **Color Scheme:** The palette is dominated by `sage` (green-gray tones) and `warm` (beige tones) for backgrounds and main text, creating a calm and inviting atmosphere. `Accent-red` (`#E63946`) is strategically used for urgent banners, call-to-action buttons, pricing highlights, and scarcity messages to grab attention and drive conversions.

**Detailed Breakdown of Sections:**

1.  **Header (SEO & Schema.org):** The `<head>` section is highly optimized for SEO, including `title`, `description`, `keywords`, Open Graph properties for social media (e.g., `og:type` set to `product`, `og:image` pointing to product mockup), and Schema.org JSON-LD for a `Product` type. This rich metadata improves search engine visibility and structured data representation.

2.  **Navigation Bar:** A simplified sticky navigation bar (compared to main site pages) focuses on returning to the homepage and a direct "立即购买" (Buy Now) link, indicating its role as a dedicated landing page. It also includes a language switcher (Chinese/English) and a mobile menu button.

3.  **Hero Section:** This is the prominent initial section designed to immediately capture attention. It features:
    *   **Urgent Banner:** "限时发布：首次公开的古方数据库，仅限前100名" (Limited release: first public ancient formula database, limited to first 100 people)
    *   **Main Headline:** "终于揭秘：解锁您持久健康的古老秘密 为什么传统的减肥方法总会反弹？" (Finally revealed: unlock the ancient secrets of lasting health. Why do traditional weight loss methods always rebound?)
    *   **Subtitle:** "突破性研究揭示：185个千年古方中隐藏的肥胖"根源密码"，首次完整公开" (Breakthrough research reveals: the "root cause code" of obesity hidden in 185 ancient prescriptions, fully revealed for the first time)
    *   **Key Statistics:** Visually appealing cards display "185 完整古方配方" (185 complete ancient formulas), "1000+ 年历史验证" (1000+ years of historical validation), and "74 种不同体质方案" (74 types of different body constitution solutions).
    *   **Main CTA Button:** "立即获取完整数据库 - 限时50%折扣" (Get the complete database now - 50% off for a limited time), with a subtext emphasizing urgency ("特惠价格24小时后恢复原价 (名额有限)").
    *   **Trust Badges:** Images indicating "安全支付" (Secure Payment), "SSL安全" (SSL Secure), and "专业认证" (Professional Certification).

4.  **Problem Amplification Section:** This section deepens the user's pain points related to ineffective weight loss.
    *   **Title:** "为什么你尝试了那么多方法，体重还是反弹？" (Why have you tried so many methods, but your weight still rebounds?)
    *   **Subtitle:** "因为你一直在治"标"，从未找到过"根"" (Because you've been treating the "symptom," never finding the "root")
    *   **Pain Points:** Lists common frustrations like "节食减肥，越减越胖" (Dieting, getting fatter with more dieting), "运动减肥，效果缓慢" (Exercise for weight loss, slow results), "减肥药物，副作用大" (Weight loss drugs, major side effects), "千篇一律，忽视个体" (One-size-fits-all, ignoring individuals), "反复折腾，信心全无" (Repeated struggles, losing all confidence), and "健康隐患，日益严重" (Health risks, increasingly serious), each with a brief description and a red-themed icon.
    *   **Shocking Data Box:** Highlights that "95%的减肥者在5年内会完全反弹，甚至比减肥前更胖" (95% of dieters completely rebound within 5 years, even heavier than before dieting), concluding with "问题不在你，而在方法！" (The problem isn't you, it's the method!).

5.  **Solution Revelation Section:** Introduces the groundbreaking nature of the TCM approach.
    *   **Title:** "突破性发现：千年古方中隐藏的"肥胖密码"" (Breakthrough discovery: the "obesity code" hidden in ancient formulas)
    *   **Subtitle:** Explains the 3-year research effort using data mining from "《中华医典》" (Chinese Medical Encyclopedia).
    *   **Data Source & Workload:** Provides details on the source ("《中华医典》" with 400 million characters) and the team's analytical work (2614 literature entries refined to 563 effective ones, resulting in 185 formulas, 253 herbs, 72 related diseases, 74 syndrome combinations).
    *   **Key Discoveries:** Highlights "惊人发现" (Amazing Discoveries) like "肥胖有7种不同"根源"" (Obesity has 7 different "root causes"), "74种体质组合类型" (74 body constitution combinations), and "253味药材的智慧搭配" (253 herb intelligent combinations).
    *   **Exclusive Data Insights:** Presents "独家揭秘" (Exclusive Revelation) with statistics on ancient obesity terms, related disease records, total collected formulas, herb combination frequencies, and research time.
    *   **Why Reveal Now:** Explains the reasons for public release now: "肥胖危机加剧" (Worsening obesity crisis), "技术成熟时机" (Mature technology timing), and "社会责任使命" (Social responsibility mission).

6.  **Authority & Trust Building Section:** Reinforces the credibility of the "heytcm" research team.
    *   **Title:** "权威背书，科学验证：我们不是凭空而谈！" (Authoritative endorsement, scientific validation: we are not talking out of thin air!)
    *   **Subtitle:** Emphasizes advanced AI and data mining techniques used.
    *   **Data-Driven & Technical Advantages:** Details about "heytcm" as a platform, the "专业技术团队" (professional technical team), and "严谨数据标准" (rigorous data standards).
    *   **Research Innovativeness:** Discusses the "首创数据挖掘方法" (first-ever data mining method), "最大规模数据库" (largest database), and "填补学术空白" (filling academic gaps).
    *   **Customer Testimonials:** Features three user testimonials with star ratings and "已验证购买" (verified purchase) labels, showcasing positive outcomes.

7.  **Value Proposition & Offer Section:** Presents the core product, its contents, and pricing tiers.
    *   **Title:** "完整古方数据库，现在首次对外发布" (Complete ancient formula database, now publicly released for the first time)
    *   **Product Details:** "《古方新解：185方剂完整数据库》" with a description of its comprehensive nature.
    *   **"您将获得" (You will get):** A list of benefits, including 185 complete formulas, 74 body constitution guidance, 253 herb mechanism analysis, 72 related disease records, data mining methodology, and expert annotations.
    *   **Pricing Tiers:** "基础版" (Basic), "标准版" (Standard - highlighted as "最受欢迎" / Most Popular), and "专业版" (Professional), each with original and discounted prices, features (checked/crossed out), and a CTA button.
    *   **Guarantees:** "即时下载，PDF格式" (Instant download, PDF format), "安全支付保障" (Secure payment guarantee), and "7天无条件退款" (7-day unconditional refund).
    *   **Urgency & Scarcity:** A yellow alert box with a warning about a "仅限前100名购买者" (limited to first 100 buyers) and "24小时后价格将恢复至¥398" (price reverts to ¥398 after 24 hours), along with a dynamic "今日已有 X 人成功购买" (X people have successfully purchased today) counter and progress bar.

8.  **Urgency & Scarcity Tactics Section:** Reinforces the time-sensitive nature of the offer.
    *   **Title:** "限时优惠，倒计时进行中！" (Limited-time offer, countdown in progress!)
    *   **Subtitle:** Emphasizes that this is an unprecedented discount.
    *   **Countdown Timer:** Displays `天` (Days), `小时` (Hours), `分钟` (Minutes), `秒` (Seconds).
    *   **Scarcity Message:** "这项独家优惠是首次公开发布，一旦错过，原价将恢复。不要让机会从指尖溜走！" (This exclusive offer is a first public release, once missed, the original price will resume. Don't let the opportunity slip away!) and "* 首批名额有限，售完即止！" (First batch limited, while stocks last!).
    *   **Strong CTA:** "立即锁定优惠！" (Lock in the discount now!)

9.  **Risk Reversal Guarantee Section:** Provides a strong refund policy to alleviate concerns.
    *   **Title:** "零风险承诺：7天无理由退款保证！" (Zero risk promise: 7-day no-reason refund guarantee!)
    *   **Guarantee Badge Image:** "7天退款保证" (7-day refund guarantee).
    *   **Description:** Explains the unconditional 7-day refund policy, emphasizing user satisfaction.
    *   **CTA:** "放心购买，即刻体验！" (Buy with confidence, experience now!)

10. **FAQ Section:** Addresses common user questions.
    *   **Questions:** "Q: 我能得到哪些客户支持？" (What kind of customer support will I get?), "Q: 内容有多新？是否定期更新？" (How new is the content? Is it regularly updated?).
    *   **Answers:** Provide details on support tiers and content update plans.
    *   **Optional CTA:** "立即购买，解除您的所有疑虑！" (Buy now, resolve all your doubts!)

11. **Final Call to Action Section:** A concluding section that reiterates urgency and encourages immediate purchase.
    *   **Title:** "不要让这次机会溜走" (Don't let this opportunity slip away)
    *   **Subtitle:** "千年智慧，首次公开。错过这次，下次恢复原价需要多付200元。" (Thousand-year wisdom, first public release. Miss this, next time the original price will resume and you'll pay 200 yuan more.)
    *   **Final CTA Button:** "立即抢购 - 仅剩24小时" (Buy now - only 24 hours left), with payment method logos (Alipay, WeChat Pay, UnionPay).

12. **Post-Footer Upsell Section:** Features related products or bundle offers.
    *   **Title:** "更多体重管理解决方案" (More weight management solutions).
    *   **Upsell Items:** "现代减重方剂数据库" (Modern Weight Loss Formula Database) and "个性化体重管理方案工具" (Personalized Weight Management Solution Tool), each with descriptions, prices, and CTA buttons.
    *   **Bundle Offer:** "全套健康管理体系 · 限时优惠" (Complete Health Management System · Limited Time Offer) with a discounted bundle price and a strong CTA.

13. **Footer:** A standard footer consistent with the site, providing information about "heytcm 研究团队" (heytcm Research Team), quick links (including `modern-recipe.html`, `glossary.html`, `daily-food-alternative.html`, `privacy.html`, `terms.html`), legal information, and copyright details. Social media icons (WeChat, Weibo) are also present.

Overall, `185-ancient-recipes.html` is a highly structured and persuasive sales page, effectively combining educational content with strong marketing tactics to drive product sales. This page seems to be the primary sales funnel for the ancient recipe database.

## river-metaphor/index.html

**Purpose:** This page uses the metaphor of a river to explain fundamental concepts of Traditional Chinese Medicine (TCM), including physiology, pathology, and treatment methods. It aims to make complex TCM principles more intuitive and accessible to a general audience by relating them to the natural flow and characteristics of a river.

**Fonts & Color Scheme:**
*   **Fonts:** The page utilizes `ZCOOL KuaiLe` and `Ma Shan Zheng` for titles, giving a playful yet traditional Chinese feel, while `Noto Serif SC` is used for body text, ensuring a clear and elegant readability.
*   **Color Scheme:** The design heavily features shades of blue and green, reminiscent of water and nature, creating a calming and educational atmosphere. Key elements are highlighted with subtle contrasts to guide the user's attention.

**Detailed Breakdown of Sections:**

1.  **Hero Section:**
    *   **Design:** Full-width section with a dynamic canvas background simulating water (`waterCanvas`). Features a prominent title and subtitle, along with a "Start Exploring" CTA button and a scroll indicator.
    *   **Content:**
        *   **Title:** "河流隐喻下的中医智慧" (TCM Wisdom under the River Metaphor)
        *   **Subtitle:** "探索水之智慧，感悟生命之理" (Explore the wisdom of water, understand the principles of life)

2.  **Navigation:**
    *   **Design:** A floating navigation bar that provides quick access to different sections of the page.
    *   **Content:** Links to "首页" (Home), "概念" (Concepts), "生理" (Physiology), "病理" (Pathology), and "治法" (Treatment).

3.  **Core Concepts Section (`#concepts`):**
    *   **Design:** Grid layout for concept cards, each with an icon, title, and brief description.
    *   **Content:** Explains core ideas like "河流隐喻" (River Metaphor), "水循环认知" (Water Cycle Cognition), "经脉如河" (Meridians as Rivers), and "以通为和" (Harmony through Flow).

4.  **Physiology Section (`#physiology`):**
    *   **Design:** Divided into "脏腑如水系" (Organs as Water Systems) and "经脉如河道" (Meridians as River Channels), using grid and list layouts.
    *   **Content:** Explains physiological functions through river analogies, such as `肺 - 云` (Lungs - Clouds), `三焦 - 河流` (San Jiao - River), `膀胱 - 湖泊` (Bladder - Lake), and features of meridians like `河流之源与气血之源` (Source of River and Source of Qi-Blood).

5.  **Pathology Section (`#pathology`):**
    *   **Design:** Grid layout for pathology cards, each with an icon, title, description, and a "treatment hint."
    *   **Content:** Describes pathological conditions using river analogies, such as "经脉之"凝"" (Meridian "Stagnation" - like a frozen river), "经脉之"阻"" (Meridian "Blockage" - like a clogged riverbed), and "女子月经 - 瀑布隐喻" (Female Menstruation - Waterfall Metaphor).

6.  **Treatment Section (`#treatment`):**
    *   **Design:** Grid layout for treatment method cards, each with an icon, title, and descriptions comparing river defense methods to TCM treatments.
    *   **Content:** Explains TCM treatment principles through river defense analogies, including "培土制水" (Cultivating Earth to Control Water), "利水去饮" (Promoting Water to Remove Phlegm), "活血祛瘀" (Activating Blood and Dispelling Stasis), "分流调节" (Diversion and Regulation), and "因势利导" (Guiding the Flow).

7.  **Interactive Elements:**
    *   **Concept Modal:** A hidden modal (`conceptModal`) for displaying detailed information about concepts, activated by user interaction.

8.  **Footer:**
    *   **Design:** Standard footer consistent with the site's branding, including site information, quick links, legal information, and copyright details.
    *   **Content:** Information about "heytcm 研究团队" (heytcm Research Team), quick links to other relevant pages (e.g., `185-ancient-recipes-research.html`, `modern-recipe.html`, `glossary.html`, `daily-food-alternative.html`), legal links (privacy policy, terms of use), and social media icons. 

## metaphor/xiashuidao.html

**Purpose:** This page uses the vivid metaphor of a "clogged sewer system" in a house to explain the Traditional Chinese Medicine (TCM) perspective on obesity. It aims to simplify complex TCM concepts (like dampness, phlegm, blood stasis, and deficiency) by relating them to everyday plumbing issues, making the understanding of bodily imbalances and their solutions more intuitive and engaging. It also compares various weight loss methods through this metaphor.

**Fonts & Color Scheme:**
*   **Fonts:** The page primarily uses a clean sans-serif font for readability, possibly `Arial` or `Inter`, to ensure clarity for its metaphorical explanations and comparative tables. There might be a subtle use of a serif font for main headings to add a touch of formality or weight.
*   **Color Scheme:** The design employs a combination of blues, grays, and whites for a clean and analytical look, with specific accent colors (e.g., green, red, yellow) used to highlight different types of "blockages" (wet, phlegm, stasis, deficiency) and their corresponding solutions. This color coding enhances visual understanding of the concepts.

**Detailed Breakdown of Sections:**

1.  **Header:**
    *   **Title:** "身体如房屋，肥胖如排水系统堵塞" (Body like a house, obesity like a clogged drainage system)
    *   **Subtitle:** "中医看肥胖：不只是脂肪多，而是身体"下水道"不通畅" (TCM perspective on obesity: not just excess fat, but clogged bodily "sewers")

2.  **House Container (Interactive Metaphor):**
    *   **Design:** Features an animation of a house (`house-animation`) with interactive tooltips (`tooltipWet`, `tooltipPhlegm`, `tooltipStasis`, `tooltipDeficiency`).
    *   **Content:** Visually represents the four main "blockages" (`湿` - Wet/Accumulated Water, `痰` - Phlegm/Grease, `瘀` - Stasis/Hard Blocks, `虚` - Deficiency/Weak Pump) within the house metaphor, with brief descriptions for each.

3.  **Method Comparison Section:**
    *   **Title:** "减肥方法对比：哪种方法真正解决"管道堵塞"？" (Weight Loss Method Comparison: Which method truly solves "pipe clogging"?)
    *   **Design:** A comparison table with columns for "减肥方法" (Weight Loss Method), "下水道比喻" (Sewer Metaphor), "机制" (Mechanism), "效果" (Effect), "常见问题" (Common Problems), and "中医古方优势" (Advantages of Ancient TCM Formulas).
    *   **Content:** Compares "饮食控制" (Diet Control), "运动" (Exercise), "减肥药" (Weight Loss Drugs), "手术" (Surgery), and "中医古方" (Ancient TCM Formulas) using the sewer metaphor to explain their mechanisms and effectiveness. The "中医古方" row is highlighted.

4.  **Chart Section:**
    *   **Title:** "疏通管道，哪种方法更胜一筹？" (Clearing pipes, which method is superior?)
    *   **Design:** Contains a `canvas` element (`methodComparisonChart`) for a Chart.js-powered radar chart, visually comparing methods.
    *   **Content:** A legend explains that "中医古方在可持续性、舒适度、副作用少、不影响生活和个性化方面表现优异" (Ancient TCM formulas perform excellently in sustainability, comfort, fewer side effects, not affecting life, and personalization, providing comprehensive "pipe clearing" solutions).

5.  **Content Sections (Detailed Explanations of Imbalances):** Each imbalance is explained in a dedicated card:
    *   **"湿"——下水道里的积水 (Wetness - Accumulated Water in the Sewer):** Explains dampness as "体内沼泽化" (internal marshification), "水管工的噩梦——返潮" (plumber's nightmare - backflow), and "疏通剂——抽湿机" (drain cleaner - dehumidifier), with associated icons and content.
    *   **"痰"——管道里凝结的油垢 (Phlegm - Congealed Grease in the Pipes):** Explains phlegm as "下水道油污怪" (sewer grease monster), "管道清道夫" (pipe cleaner), and "脂肪的早期形态" (early form of fat), with associated icons and content.
    *   **"瘀"——管道里卡住的硬块 (Stasis - Hard Blocks in the Pipes):** Explains blood stasis as "管道硬核堵塞物" (hardcore pipe blockage), "高压水枪通淤" (high-pressure water gun to clear stasis), and "交通大瘫痪" (traffic paralysis), with associated icons and content.
    *   **"虚"——水泵老化/水压不足 (Deficiency - Aging Pump/Insufficient Water Pressure):** Explains deficiency as "动力不足的老旧水泵" (old pump with insufficient power), "松垮的排水管" (loose drainpipe), and "给水泵充电" (charging the water pump), with associated icons and content.

6.  **Maintenance Guide:**
    *   **Title:** "人体管道养护指南" (Human Body Pipe Maintenance Guide)
    *   **Design:** Grid of guide items, each with an icon, title, and a metaphorical tip.
    *   **Content:** Provides advice on "饮食" (Diet - avoiding grease), "运动" (Exercise - regular flushing), "情绪" (Emotion - avoiding pressure), and "作息" (Rest - maintaining the "pump").

7.  **Self-Assessment Section:**
    *   **Title:** "你的"管道"堵在哪儿？测测你的体质" (Where are your "pipes" clogged? Test your constitution)
    *   **Design:** A quiz container with start, questions, and results sections, including a progress bar and quiz controls.
    *   **Content:** An interactive quiz to help users identify their body constitution type and find suitable "pipe clearing" solutions, with recommended herbal recipes based on results and a disclaimer.

8.  **Recipe Section:**
    *   **Title:** "尝试这些古方药膳，疏通你的"管道"" (Try these ancient medicinal diets to clear your "pipes")
    *   **Design:** Grid of recipe cards, each with an image, title, target imbalance, effect, and a hidden details section.
    *   **Content:** Features recipes like "薏米粥" (Coix Seed Porridge) for dampness, "玫瑰花茶" (Rose Tea) for Qi stagnation/phlegm, and "山药粥" (Yam Porridge) for deficiency, with ingredients and preparation steps.

9.  **Conclusion:**
    *   **Title:** "肥胖的四重奏——堵塞交响曲" (The Quartet of Obesity - The Clogging Symphony)
    *   **Content:** Illustrates the sequence of imbalances (deficiency -> dampness -> phlegm -> stasis) with icons and brief descriptions. Concludes with a reminder that "减肥如通渠，非一日之功" (weight loss is like clearing a channel, not an overnight task) and that a TCM practitioner is like a "通渠师傅" (channel clearing master).

10. **Disclaimer Section:**
    *   **Title:** "重要提醒" (Important Reminder)
    *   **Content:** A disclaimer stating that the content is for educational purposes only and not a substitute for professional medical advice, with CTA buttons to find a TCM practitioner or contact the team.

11. **Footer:** Standard footer consistent with the site, providing information about "heytcm 研究团队" (heytcm Research Team), quick links to other relevant pages, legal information, and social media icons.

Overall, `metaphor/xiashuidao.html` is a highly engaging and educational page that effectively uses a relatable metaphor to explain complex TCM concepts related to obesity, offering both theoretical understanding and practical dietary advice.

## metaphor/loushuiwuding.html

**Purpose:** This page uses the vivid metaphor of a "clogged sewer system" in a house to explain the Traditional Chinese Medicine (TCM) perspective on obesity. It aims to simplify complex TCM concepts (like dampness, phlegm, blood stasis, and deficiency) by relating them to everyday plumbing issues, making the understanding of bodily imbalances and their solutions more intuitive and engaging. It also compares various weight loss methods through this metaphor.

**Fonts & Color Scheme:**
*   **Fonts:** The page primarily uses a clean sans-serif font for readability, possibly `Arial` or `Inter`, to ensure clarity for its metaphorical explanations and comparative tables. There might be a subtle use of a serif font for main headings to add a touch of formality or weight.
*   **Color Scheme:** The design employs a combination of blues, grays, and whites for a clean and analytical look, with specific accent colors (e.g., green, red, yellow) used to highlight different types of "blockages" (wet, phlegm, stasis, deficiency) and their corresponding solutions. This color coding enhances visual understanding of the concepts.

**Detailed Breakdown of Sections:**

1.  **Header:**
    *   **Title:** "身体如房屋，肥胖如排水系统堵塞" (Body like a house, obesity like a clogged drainage system)
    *   **Subtitle:** "中医看肥胖：不只是脂肪多，而是身体"下水道"不通畅" (TCM perspective on obesity: not just excess fat, but clogged bodily "sewers")

2.  **House Container (Interactive Metaphor):**
    *   **Design:** Features an animation of a house (`house-animation`) with interactive tooltips (`tooltipWet`, `tooltipPhlegm`, `tooltipStasis`, `tooltipDeficiency`).
    *   **Content:** Visually represents the four main "blockages" (`湿` - Wet/Accumulated Water, `痰` - Phlegm/Grease, `瘀` - Stasis/Hard Blocks, `虚` - Deficiency/Weak Pump) within the house metaphor, with brief descriptions for each.

3.  **Method Comparison Section:**
    *   **Title:** "减肥方法对比：哪种方法真正解决"管道堵塞"？" (Weight Loss Method Comparison: Which method truly solves "pipe clogging"?)
    *   **Design:** A comparison table with columns for "减肥方法" (Weight Loss Method), "下水道比喻" (Sewer Metaphor), "机制" (Mechanism), "效果" (Effect), "常见问题" (Common Problems), and "中医古方优势" (Advantages of Ancient TCM Formulas).
    *   **Content:** Compares "饮食控制" (Diet Control), "运动" (Exercise), "减肥药" (Weight Loss Drugs), "手术" (Surgery), and "中医古方" (Ancient TCM Formulas) using the sewer metaphor to explain their mechanisms and effectiveness. The "中医古方" row is highlighted.

4.  **Chart Section:**
    *   **Title:** "疏通管道，哪种方法更胜一筹？" (Clearing pipes, which method is superior?)
    *   **Design:** Contains a `canvas` element (`methodComparisonChart`) for a Chart.js-powered radar chart, visually comparing methods.
    *   **Content:** A legend explains that "中医古方在可持续性、舒适度、副作用少、不影响生活和个性化方面表现优异" (Ancient TCM formulas perform excellently in sustainability, comfort, fewer side effects, not affecting life, and personalization, providing comprehensive "pipe clearing" solutions).

5.  **Content Sections (Detailed Explanations of Imbalances):** Each imbalance is explained in a dedicated card:
    *   **"湿"——下水道里的积水 (Wetness - Accumulated Water in the Sewer):** Explains dampness as "体内沼泽化" (internal marshification), "水管工的噩梦——返潮" (plumber's nightmare - backflow), and "疏通剂——抽湿机" (drain cleaner - dehumidifier), with associated icons and content.
    *   **"痰"——管道里凝结的油垢 (Phlegm - Congealed Grease in the Pipes):** Explains phlegm as "下水道油污怪" (sewer grease monster), "管道清道夫" (pipe cleaner), and "脂肪的早期形态" (early form of fat), with associated icons and content.
    *   **"瘀"——管道里卡住的硬块 (Stasis - Hard Blocks in the Pipes):** Explains blood stasis as "管道硬核堵塞物" (hardcore pipe blockage), "高压水枪通淤" (high-pressure water gun to clear stasis), and "交通大瘫痪" (traffic paralysis), with associated icons and content.
    *   **"虚"——水泵老化/水压不足 (Deficiency - Aging Pump/Insufficient Water Pressure):** Explains deficiency as "动力不足的老旧水泵" (old pump with insufficient power), "松垮的排水管" (loose drainpipe), and "给水泵充电" (charging the water pump), with associated icons and content.

6.  **Maintenance Guide:**
    *   **Title:** "人体管道养护指南" (Human Body Pipe Maintenance Guide)
    *   **Design:** Grid of guide items, each with an icon, title, and a metaphorical tip.
    *   **Content:** Provides advice on "饮食" (Diet - avoiding grease), "运动" (Exercise - regular flushing), "情绪" (Emotion - avoiding pressure), and "作息" (Rest - maintaining the "pump").

7.  **Self-Assessment Section:**
    *   **Title:** "你的"管道"堵在哪儿？测测你的体质" (Where are your "pipes" clogged? Test your constitution)
    *   **Design:** A quiz container with start, questions, and results sections, including a progress bar and quiz controls.
    *   **Content:** An interactive quiz to help users identify their body constitution type and find suitable "pipe clearing" solutions, with recommended herbal recipes based on results and a disclaimer.

8.  **Recipe Section:**
    *   **Title:** "尝试这些古方药膳，疏通你的"管道"" (Try these ancient medicinal diets to clear your "pipes")
    *   **Design:** Grid of recipe cards, each with an image, title, target imbalance, effect, and a hidden details section.
    *   **Content:** Features recipes like "薏米粥" (Coix Seed Porridge) for dampness, "玫瑰花茶" (Rose Tea) for Qi stagnation/phlegm, and "山药粥" (Yam Porridge) for deficiency, with ingredients and preparation steps.

9.  **Conclusion:**
    *   **Title:** "肥胖的四重奏——堵塞交响曲" (The Quartet of Obesity - The Clogging Symphony)
    *   **Content:** Illustrates the sequence of imbalances (deficiency -> dampness -> phlegm -> stasis) with icons and brief descriptions. Concludes with a reminder that "减肥如通渠，非一日之功" (weight loss is like clearing a channel, not an overnight task) and that a TCM practitioner is like a "通渠师傅" (channel clearing master).

10. **Disclaimer Section:**
    *   **Title:** "重要提醒" (Important Reminder)
    *   **Content:** A disclaimer stating that the content is for educational purposes only and not a substitute for professional medical advice, with CTA buttons to find a TCM practitioner or contact the team.

11. **Footer:** Standard footer consistent with the site, providing information about "heytcm 研究团队" (heytcm Research Team), quick links to other relevant pages, legal information, and social media icons.

Overall, `metaphor/loushuiwuding.html` is a highly engaging and educational page that effectively uses a relatable metaphor to explain complex TCM concepts related to obesity, offering both theoretical understanding and practical dietary advice.