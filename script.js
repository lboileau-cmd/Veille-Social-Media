fetch('data.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('date-display').innerText = `Édition du ${data.edition_date}`;
        document.getElementById('intro-text').innerText = data.intro;

        const container = document.getElementById('topics-container');

        data.topics.forEach(topic => {
            const section = document.createElement('section');
            section.className = 'topic-section';

            let postsHTML = '';
            topic.posts_related.forEach(post => {
                postsHTML += `
                    <div class="post-card">
                        <h4>${post.account} • ${post.date}</h4>
                        <p><strong>Concept :</strong> ${post.concept}</p>
                        <p>${post.summary}</p>
                        <a href="${post.post_url}" target="_blank" class="btn-source">→ Voir le post Instagram</a>
                    </div>
                `;
            });

            section.innerHTML = `
                <div class="topic-header">
                    <h2>${topic.title}</h2>
                    <p>${topic.description}</p>
                </div>
                <div class="post-grid">
                    ${postsHTML}
                </div>
                <div class="expert-box">
                    <strong>💡 Ce que l'expert nous apprend</strong>
                    ${topic.expert_takeaway}
                </div>
                <hr style="margin-top:50px; border:0; border-top:1px solid #e2e8f0;">
            `;
            container.appendChild(section);
        });
    });
