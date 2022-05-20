import { NextPage } from "next";
import { fetchEntries } from "../../contentful";
import MainLayout from "../../layouts/main";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import AddCommentForm from "../../components/AddCommentForm";

const options = {
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <p style={{color: 'red'}}>{children}</p>,
    }
}

const SinglePage: NextPage = ({ post, comments }) => {
    console.log(comments)
    return <MainLayout>
        <div className="content">
            <h1>{post.name}</h1>
            {documentToReactComponents(post.content, options)}
        </div>
        <AddCommentForm postId={post.id} />
    </MainLayout>
}

export const getServerSideProps = async (context) => {
    const { slug } = context.params;

    const res = await fetchEntries({
        content_type: 'product',
        'fields.slug': slug
    });

    

    const post = res?.map(p => ({
        ...p.fields,
        id: p.sys.id
    })).shift();    

    const commentsRes = await fetchEntries({
        content_type: 'comment',
        include: 2,
        'fields.article.sys.id': post.id,
    });

    const comments = commentsRes?.map(c => c.fields);

    console.log(commentsRes)

    return {
        props: {
            post,
            comments
        }
    }
}

export default SinglePage;