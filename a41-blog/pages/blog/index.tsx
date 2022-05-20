import { NextPage } from "next";
import PostPreview from "../../components/PostPreview";
import MainLayout from "../../layouts/main";
import { fetchEntries } from "../../contentful";

const BlogPage: NextPage = ({ posts }) => {
    return <MainLayout>
        <div className="columns">
            {
                posts.map(post => (
                    <div className="column is-one-third" key={post.slug}>
                        <PostPreview
                            author="Mateusz Jablonski"
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis rem, voluptas doloremque nemo mollitia laudantium cupiditate veniam corrupti deserunt porro?"
                            date="2022-05-21"
                            title={post.name}
                            image={post.image.fields.file.url}
                            slug={post.slug}
                        />
                    </div>
                ))
        }
        </div>
    </MainLayout>
}

export const getServerSideProps = async () => {
    const res = await fetchEntries({
        content_type: 'product',
        'fields.price[gte]': 100,
    });

    const posts = res?.map(p => p.fields);

    return {
        props: {
            posts
        }
    }
}

export default BlogPage;