const siteName = 'Codevera Web Solutions';

const baseUrl = 'https://www.codevera.tech';
const baseTitle = 'Codevera - Web Solutions for Your Business';
const baseDescription =
    'Codevera specializes in developing advanced web solutions, including E-commerce, CMS, ERP systems, and custom business applications.';
const baseKeywords = 'Codevera, web development, E-commerce, CMS, ERP, web applications, business solutions';
const baseAuthor = 'Codevera Team';
const baseImage = 'https://www.codevera.tech/screenshots/codevera.png';

const homepageImage = `${baseImage}/og/home.webp`;

export const metadataMain = {
    title: baseTitle,
    description: baseDescription,
    coverage: 'Worldwide',
    openGraph: {
        title: baseTitle,
        description: baseDescription,
        url: baseUrl,
        siteName: siteName,
        images: [
            {
                url: homepageImage,
                width: 1200,
                height: 630,
            },
        ],
        author: baseAuthor,
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: baseTitle,
        description: baseDescription,
        images: [
            {
                url: homepageImage,
                width: 1200,
                height: 630,
            },
        ],
        images: [],
    },
};

const portfolioTitle = 'Portfolio - Codevera Web Development';
const portfolioDescription = 'A showcase of Codevera’s best work, from websites to enterprise-grade web applications.';
const portfolioImage = `${baseImage}/og/portfolio.webp`;

export const metadataPortfolio = {
    title: portfolioTitle,
    description: `${baseDescription}. ${portfolioDescription}`,
    openGraph: {
        title: portfolioTitle,
        description: portfolioDescription,
        url: `${baseUrl}/portfolio`,
        images: [
            {
                url: portfolioImage,
                width: 1200,
                height: 630,
            },
        ],
        type: 'website',
    },
};

const aboutTitle = 'About Us - Codevera Web Development';
const aboutDescription = 'Learn more about Codevera, our mission, and our team of web development experts.';
const aboutImage = `${baseImage}/og/about.webp`;
export const metadataAbout = {
    title: aboutTitle,
    description: `${baseDescription}. ${aboutDescription}`,
    openGraph: {
        title: aboutTitle,
        description: aboutDescription,
        url: `${baseUrl}/about`,
        images: [
            {
                url: aboutImage,
                width: 1200,
                height: 630,
            },
        ],
        type: 'website',
    },
};
const contactImage = `${baseImage}/og/contact.webp`;

const contactTitle = 'Contact Us - Codevera Web Development';
const contactDescription = 'Get in touch with Codevera for your web development needs. We are here to help you.';
export const metadataContact = {
    title: contactTitle,
    description: `${baseDescription}. ${contactDescription}`,
    openGraph: {
        title: contactTitle,
        description: contactDescription,
        url: `${baseUrl}/contact`,
        images: [
            {
                url: contactImage,
                width: 1200,
                height: 630,
            },
        ],
        type: 'website',
    },
};

export const sitemapConfig = [
    {
        url: `${baseUrl}/`,
        lastModified: new Date(),
    },
    {
        url: `${baseUrl}/about`,
        lastModified: new Date(),
    },
    {
        url: `${baseUrl}/portfolio`,
        lastModified: new Date(),
    },
    {
        url: `${baseUrl}/contact`,
        lastModified: new Date(),
    },
];
