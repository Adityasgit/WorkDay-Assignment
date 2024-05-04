export const Utils = {
    getRoles: () => {
        return [
            { name: "Frontend", value: "fronted" },
            { name: "Backend", value: "backend" },
            { name: "Fullstack", value: "fullstack" },
            { name: "IOS", value: "ios" },
            { name: "Android", value: "android" },
            { name: "Other", value: "other" },
        ];
    }
    ,
    getExperiences: () => {
        return [
            { name: "0-1 year", value: 1 },
            { name: "1-2 years", value: 2 },
            { name: "2-3 years", value: 3 },
            { name: "3-4 years", value: 4 },
            { name: "4-5 years", value: 5 },
            { name: "5+ years", value: 6 },
        ];
    }
    , getLocations: () => {
        return [
            { name: "Remote", value: "remote" },
            { name: "Hybird", value: "both" },
            { name: "On-site", value: "onsite" },
        ];
    }
}