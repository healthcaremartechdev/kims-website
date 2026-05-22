import { notFound } from "next/navigation";

const getFacilityData = {

    // FOR DETAILS PAGE;
    getSingleFacility: async ({ slug, langLoc }) => {
     

        // Get speciality data using id;
        const req = await fetch(process.env.NEXT_PUBLIC_CMS_API_URL + `/facilities?populate[0]=locations&populate[1]=metaSection&filters[locations][id][$eq]=${langLoc.loc.id}&filters[slug][$eq]=${slug}`);
        const res = await req.json();

        if (!res.data[0]) {
            return notFound();
        }

        return res.data[0];
    },

}

export default getFacilityData;
