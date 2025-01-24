//Local, Development, Production

const configs = {
    server:{    
        url: "http://localhost:3000",
    },
    routes:{
        teacher:{
            list: "/teacher/list",
            create: "/teacher/create",
            update: "/teacher/update",
            delete: "/teacher/delete",
        },
    },
};

export default configs;