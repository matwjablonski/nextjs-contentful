import { NextPage } from "next";
import { fetchEntries } from "../../contentful";
import MainLayout from "../../layouts/main";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

const options = {
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <p style={{color: 'red'}}>{children}</p>,
    }
}

const SinglePage: NextPage = ({ post }) => {
    console.log(post.content)
    return <MainLayout>
        <div className="content">
            <h1>{post.name}</h1>
            {documentToReactComponents(post.content, options)}
        </div>
    </MainLayout>
}

export const getServerSideProps = async (context) => {
    const { slug } = context.params;

    const res = await fetchEntries({
        content_type: 'product',
        'fields.slug': slug
    });

    const post = res?.map(p => p.fields).shift();    


    return {
        props: {
            post
        }
    }
}

export default SinglePage;