export const generateStaticParams = async () => {
    return [1,2,3,4,5].map(num => {
        return {
            slug: num.toString()
        }
    })
};

const CatalogDetailsPage = () => {
    return ( 
        <h1></h1>
     );
}
 
export default CatalogDetailsPage;