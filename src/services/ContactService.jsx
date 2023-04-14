class ContactService {
    static contactLists = [
        {
            "id":1,
            "heading" : "Study God's Word with Pastor Paul Adewodun",
            "title" : "Click Here to veiw to the Latest Sermons From Daddy G.O ",
            "small" :"and be blessed in Jesus Name.",
             "btext" : "Veiw Now",
             "pathname": "/teachings"

        },
        {   "id":2,
            "heading" : "House Fellowship Program",
            "title" : "know More About Our House Fellowship Program.",
             "small" :"fellowship is path in christainity that as christains we must tread , for in fellowshiping we grow in christ.",
             "btext" : "Join Now",
             "pathname" : "/programs"
        },
        {   "id":3,
            "heading" : "Online Giving For God's work",
            "title" : "All forms of giving to the mission be it Building offering,tithes and donations,giving is an act of praise",
            "small" :" This can be made via a click of the button below.",
             "btext" : "Give Now",
             "pathname" : "/what"
        },
        {    "id":4,
            "heading" : "Testimony",
            "title" : "To share the testimony of what God did for you during any of our programs.",
            "small" :"kindly click here so it can be added to the Online Testimonies archives.",
             "btext" : "Share here",
             "pathname" : "/what"
        },
        {    "id":5,
            "heading" : "Church Units",
            "title" : "Click Here to know more about the different units and departments in the church.",
            "small" :"we are all part of one body which is christ",
             "btext" : "know more",
             "pathname" : "/units"

        },
        {    "id":6,
            "heading" : "services",
            "title" : "know more about our programs , services and events with their schedule time.",
            "small" :"in the presence of God is where we must be",
             "btext" : "Know more",
             "pathname" : "/programs"
        },
    ]
    static getContactList() {
        return this.contactLists;
    }
};

export default ContactService;