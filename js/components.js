class ComponentManager {
    constructor() {
        this.components = new Map();
        this.registerDefaultComponents();
    }

    register(name, component) {
        this.components.set(name, component);
    }

    render(name, container, data) {
        const component = this.components.get(name);
        if (component) {
            component.render(container, data);
        }
    }

    registerDefaultComponents() {
        this.register('activities', new ActivitiesComponent());
        this.register('events', new EventsComponent());
        this.register('members', new MembersComponent());
        this.register('gallery', new GalleryComponent());
        this.register('contact-form', new ContactFormComponent());
    }
}

class ActivitiesComponent {
    render(container, data) {
        container.innerHTML = '';
        data.forEach(activity => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="card-icon">${activity.icon}</div>
                <h3 class="card-title">${activity.title}</h3>
                <p class="card-description">${activity.description}</p>
            `;
            container.appendChild(card);
        });
    }
}

class EventsComponent {
    render(container, data) {
        container.innerHTML = '';
        data.forEach(event => {
            const eventItem = document.createElement('div');
            eventItem.className = 'event-item';
            
            const date = new Date(event.date);
            const monthNames = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
            
            eventItem.innerHTML = `
                <div class="event-date">
                    <div class="event-month">${monthNames[date.getMonth()]}</div>
                    <div class="event-day">${date.getDate()}</div>
                </div>
                <div class="event-content">
                    <h3 class="event-title">${event.title}</h3>
                    <p class="event-description">${event.description}</p>
                    <p class="event-location">📍 ${event.location}</p>
                </div>
            `;
            container.appendChild(eventItem);
        });
    }
}

class MembersComponent {
    render(container, data) {
        container.innerHTML = '';
        data.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.className = 'member-card';
            memberCard.innerHTML = `
                <div class="member-avatar">${member.avatar}</div>
                <h3 class="member-name">${member.name}</h3>
                <p class="member-role">${member.role}</p>
            `;
            container.appendChild(memberCard);
        });
    }
}

class GalleryComponent {
    render(container, data) {
        container.innerHTML = '';
        data.forEach(item => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.innerHTML = `
                <img src="${item.imageUrl}" alt="${item.title}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjIwMCIgeT0iMTUwIiBzdHlsZT0iZmlsbDojYWFhO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjE5cHg7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+NDAweDMwMDwvdGV4dD48L3N2Zz4='">
                <div class="gallery-caption">
                    <p>${item.caption}</p>
                </div>
            `;
            galleryItem.addEventListener('click', () => {
                this.showLightbox(item);
            });
            container.appendChild(galleryItem);
        });
    }

    showLightbox(item) {
        console.log('Lightbox would show:', item);
    }
}

class ContactFormComponent {
    render(container, data) {
        const form = container.querySelector('form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleSubmit(form);
            });
        }
    }

    handleSubmit(form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        console.log('Form submitted:', data);
        alert('お問い合わせありがとうございます。後日ご連絡させていただきます。');
        form.reset();
    }
}

const componentManager = new ComponentManager();