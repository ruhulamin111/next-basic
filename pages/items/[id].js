import Meta from "../../components/Meta";

const SingleItem = ({ single }) => {
    console.log(single);
    return (
        <>
            <Meta title={single.title} keywords={single.title} description={single.body} />
            <main className="container mt-4">
                <div className="row">
                    <h2>{single.title}</h2>
                    <p>{single.body}</p>
                </div>
            </main>
        </>
    );
};

export const getServerSideProps = async (context) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + context.params.id);
    const single = await res.json();

    return {
        props: {
            single
        }
    }
}





export default SingleItem;