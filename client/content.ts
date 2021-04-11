export const home = {
    draft: {
      hero: {
        title: 'Hmm, need something clever here',
        body: 'blah blah blah, our product is the best!',
      },
      features: [
        { title: 'Feature 1', body: 'something dope about feature 1 here soon.' },
        { title: 'Feature 2', body: 'something dope about feature 2 here soon.' },
      ],
    },
    published: {
      hero: {
        title: 'Take a moment',
        desc1: 'Why Learning to Code is So Damn Hard?',
        desc2: 'How to Think Like a Programmer?',
        desc3: 'What the heck am I doing?',
        desc4: 'And?'
      },
      features: [
        {
          title: 'Next gen editor',
          body:
            'Forget about markdown and rich text. Our editor is superchared to handle any content you can throug at it.',
        },
        { title: 'Stay organized', body: 'Use folders to put your docs right where you need them when you need them.' },
        { title: 'Beautiful design', body: 'Award wining design that you will fall in love with.' },
      ],
    },
  }
  
  export const posts = {
    draft: [
      `---
  title: "We're hiring"
  summary: 'Will come up with summary later'
  slug: 'we-are-hiring'
  publsihedOn: ''
  ---
  
  ## nice post, who dis
  `,
      `---
  title: Why you should write down everything
  summary: Will come up with summary later
  slug: why-you-should-write-down-everything
  publsihedOn: ''
  ---
  ## Writing is fun`,
    ],
    published: [
      "---\ntitle: We're hiring\nsummary: Come work at a really nice company.\nslug: we-are-hiring\npublsihedOn: '12-03-2020'\n---\n## Come with with us",
    ],
  }
  