import Link from "next/link";
import Meta from "../components/Meta";

const Index = ({ itemList }) => {

  return (
    <>
      <Meta title={itemList.title} keywords={itemList.title} description={itemList.body} />

      <main className="container mt-4">
        <div className="row">
          {itemList.slice(0, 16).map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <Link href="/items/[id]" as={`/items/${item.id}`} >
                <a className="btn btn-primary">Details</a>
              </Link>
            </div>
          ))}

        </div>
      </main>
    </>
  );
};


export const getServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const itemList = await res.json();

  return {
    props: {
      itemList
    }
  }
}



export default Index;