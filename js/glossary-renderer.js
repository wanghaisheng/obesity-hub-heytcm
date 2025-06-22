document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('glossary-content-container');

    if (!container || !glossaryData) {
        console.error('Glossary container not found or data not loaded.');
        return;
    }

    glossaryData.forEach(group => {
        const groupSection = document.createElement('section');
        groupSection.id = group.id;
        groupSection.className = 'bg-white shadow-lg rounded-lg p-8 mb-12';

        const groupTitle = document.createElement('h3');
        groupTitle.className = 'text-2xl font-serif font-semibold text-sage-800 mb-6';
        groupTitle.textContent = group.title;
        groupSection.appendChild(groupTitle);

        if (group.intro) {
            const introPara = document.createElement('p');
            introPara.className = 'text-sage-700 leading-relaxed mb-4';
            introPara.innerHTML = group.intro;
            groupSection.appendChild(introPara);
        }

        group.sections.forEach(section => {
            if (section.type === 'card') {
                const cardDiv = document.createElement('div');
                cardDiv.className = 'bg-sage-50 p-6 rounded-lg shadow-inner mb-8';

                if (section.title) {
                    const cardTitle = document.createElement('h4');
                    cardTitle.className = 'text-xl font-serif font-semibold text-sage-700 mb-4';
                    cardTitle.textContent = section.title;
                    cardDiv.appendChild(cardTitle);
                }

                section.content.forEach(contentBlock => {
                    if (contentBlock.type === 'paragraph') {
                        const para = document.createElement('p');
                        para.className = 'text-sage-700 leading-relaxed ' + (contentBlock.text.includes('<ul') || contentBlock.text.includes('<dl') ? '' : 'mb-4');
                        para.innerHTML = contentBlock.text;
                        cardDiv.appendChild(para);
                    } else if (contentBlock.type === 'list') {
                        const ul = document.createElement('ul');
                        ul.className = 'list-disc list-inside text-sage-700 ml-4 space-y-2';
                        contentBlock.items.forEach(item => {
                            const li = document.createElement('li');
                            if (typeof item === 'object' && item.term && item.description) {
                                li.innerHTML = `<dt class="font-bold text-sage-800">${item.term}</dt><dd class="ml-4 text-sage-700">${item.description}</dd>`;
                                ul.className = 'space-y-2'; // Adjust for definition list style
                            } else {
                                li.innerHTML = item;
                            }
                            ul.appendChild(li);
                        });
                        cardDiv.appendChild(ul);
                    } else if (contentBlock.type === 'definition_list') {
                        const dl = document.createElement('dl');
                        dl.className = 'space-y-4';
                        contentBlock.items.forEach(item => {
                            const div = document.createElement('div');
                            const dt = document.createElement('dt');
                            dt.className = 'font-bold text-sage-800';
                            dt.textContent = item.term;
                            const dd = document.createElement('dd');
                            dd.className = 'ml-4 text-sage-700';
                            dd.innerHTML = item.description;
                            div.appendChild(dt);
                            div.appendChild(dd);
                            dl.appendChild(div);
                        });
                        cardDiv.appendChild(dl);
                    }
                });
                groupSection.appendChild(cardDiv);
            } else if (section.type === 'subsection') {
                const subTitle = document.createElement('h4');
                subTitle.className = 'text-xl font-serif font-semibold text-sage-700 mb-4 mt-8';
                subTitle.textContent = section.title;
                groupSection.appendChild(subTitle);

                const subGrid = document.createElement('div');
                subGrid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-4';

                section.content.forEach(subSectionCard => {
                    const cardDiv = document.createElement('div');
                    cardDiv.className = 'bg-sage-50 p-6 rounded-lg shadow-inner';

                    if (subSectionCard.title) {
                        const cardTitle = document.createElement('h5');
                        cardTitle.className = 'font-bold text-sage-800 mb-2';
                        cardTitle.textContent = subSectionCard.title;
                        cardDiv.appendChild(cardTitle);
                    }

                    subSectionCard.content.forEach(cardContentBlock => {
                        if (cardContentBlock.type === 'paragraph') {
                            const para = document.createElement('p');
                            para.className = 'text-sage-700 leading-relaxed mb-4';
                            para.innerHTML = cardContentBlock.text;
                            cardDiv.appendChild(para);
                        } else if (cardContentBlock.type === 'list') {
                            const ul = document.createElement('ul');
                            ul.className = 'list-disc list-inside text-sage-700 ml-4 mb-4 space-y-2';
                            cardContentBlock.items.forEach(item => {
                                const li = document.createElement('li');
                                if (typeof item === 'object' && item.term && item.description) {
                                    li.innerHTML = `<dt class="font-bold text-sage-800">${item.term}</dt><dd class="ml-4 text-sage-700">${item.description}</dd>`;
                                    ul.className = 'space-y-2';
                                } else {
                                    li.innerHTML = item;
                                }
                                ul.appendChild(li);
                            });
                            cardDiv.appendChild(ul);
                        } else if (cardContentBlock.type === 'definition_list') {
                            const dl = document.createElement('dl');
                            dl.className = 'space-y-2';
                            cardContentBlock.items.forEach(item => {
                                const div = document.createElement('div');
                                const dt = document.createElement('dt');
                                dt.className = 'font-bold text-sage-800';
                                dt.textContent = item.term;
                                const dd = document.createElement('dd');
                                dd.className = 'ml-4 text-sage-700';
                                dd.innerHTML = item.description;
                                div.appendChild(dt);
                                div.appendChild(dd);
                                dl.appendChild(div);
                            });
                            cardDiv.appendChild(dl);
                        }
                    });
                    subGrid.appendChild(cardDiv);
                });
                groupSection.appendChild(subGrid);
            }
        });
        container.appendChild(groupSection);
    });
}); 