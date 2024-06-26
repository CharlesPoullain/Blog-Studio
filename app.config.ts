// https://github.com/nuxt-themes/alpine/blob/main/nuxt.schema.ts
export default defineAppConfig({
  alpine: {
    title: 'Charles ',
    description: 'Charles Poullain Blog - Fullstack developer',
    image: {
      src: '/social-card-preview.png',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300
    },
    header: {
      position: 'left', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo.me.svg', // path of the logo
        pathDark: '/logo.me.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'Charles' // alt of the logo
      }
    },
    footer: {
      credits: {
        // possible value are : true | false
        enabled: true,

        // our github repository
        repository: 'https://www.github.com/nuxt-themes/alpine',

        text: 'Charles Poullain'
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Follow me on' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: 'charlespoullain'
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})