export default {
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'compnay',
            title: 'Compnay',
            type: 'string'
        },
        {
            name: 'imgURL',
            title: 'Img URL',
            type: 'image',
            options: {
                hotspot: true
            }
        },
    ]
}