export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: "project_title",
            title: "Project Title",
            type: "string"
        },
        {
            name: "project_desc",
            title: "Project Description",
            type: "string"
        },
        {
            name: "project_link",
            title: "Project Link",
            type: "url"
        },
        {
            name: "project_img",
            title: "Upload Images",
            type: "image",
            options: {
                hotspot: true
            }
        }
    ]
}