const siteConfig = {
    siteName: "サークル名",
    siteTagline: "ここにサークルのキャッチフレーズが入ります",
    contactEmail: "contact@example.com",
    socialLinks: {
        twitter: "https://twitter.com/example",
        instagram: "https://instagram.com/example",
        facebook: "https://facebook.com/example"
    },
    features: {
        enableGallery: true,
        enableEvents: true,
        enableMembers: true,
        enableContactForm: true
    },
    api: {
        baseUrl: "/data",
        endpoints: {
            activities: "/activities.json",
            events: "/events.json",
            members: "/members.json",
            gallery: "/gallery.json"
        }
    }
};

const dataConfig = {
    activities: [
        {
            id: 1,
            title: "定期練習",
            description: "毎週火曜日と木曜日に定期的な練習を行っています。初心者から経験者まで幅広く参加できます。",
            icon: "🎯"
        },
        {
            id: 2,
            title: "ワークショップ",
            description: "月に一度、専門家を招いたワークショップを開催。スキルアップの機会を提供しています。",
            icon: "📚"
        },
        {
            id: 3,
            title: "交流会",
            description: "他のサークルや団体との交流会を定期的に開催。ネットワークを広げる機会になります。",
            icon: "🤝"
        }
    ],
    events: [
        {
            id: 1,
            title: "春の新歓イベント",
            description: "新入生歓迎イベントを開催します。サークルの活動を体験できる絶好の機会です。",
            date: "2024-04-15",
            location: "大学キャンパス内 体育館",
            status: "upcoming"
        },
        {
            id: 2,
            title: "夏合宿",
            description: "3泊4日の夏合宿を実施。集中的な練習と親睦を深める機会です。",
            date: "2024-08-10",
            location: "山梨県 合宿施設",
            status: "upcoming"
        },
        {
            id: 3,
            title: "秋の発表会",
            description: "一年間の成果を発表する機会。一般の方も観覧可能です。",
            date: "2024-11-20",
            location: "市民ホール",
            status: "upcoming"
        }
    ],
    members: [
        {
            id: 1,
            name: "山田 太郎",
            role: "代表",
            avatar: "👤",
            description: "サークル創設メンバー。みんなをまとめるリーダー。"
        },
        {
            id: 2,
            name: "佐藤 花子",
            role: "副代表",
            avatar: "👤",
            description: "イベント企画のスペシャリスト。"
        },
        {
            id: 3,
            name: "鈴木 一郎",
            role: "会計",
            avatar: "👤",
            description: "サークルの財務を管理。"
        }
    ],
    gallery: [
        {
            id: 1,
            title: "春の新歓イベント",
            imageUrl: "/images/event1.jpg",
            caption: "新入生歓迎イベントの様子"
        },
        {
            id: 2,
            title: "定期練習風景",
            imageUrl: "/images/practice1.jpg",
            caption: "普段の練習の様子"
        },
        {
            id: 3,
            title: "夏合宿",
            imageUrl: "/images/camp1.jpg",
            caption: "夏合宿での集合写真"
        }
    ]
};