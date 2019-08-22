import React from 'react';
import useFetch from '../../Utils/useFetch';
import BlogItem from './BlogItem';
import Loader from '../Loader';

const BlogWidget = () => {
    const [data, isLoading] = useFetch(
        'http://localhost:3000/BlogPosts.json',
        []
    );

    return (
        <section className="section">
            <div className="container is-small has-text-centered">
                {isLoading && <Loader size="medium" />}
                {!isLoading && (
                    <div className="columns is-vcentered is-multiline">
                        {data.map(post => (
                            <div className="column is-half-tablet is-one-thirds-desktop is-one-third-widescreen is-one-third-fullhd">
                                <BlogItem
                                    key={post.slug}
                                    slug={post.slug}
                                    title={post.title}
                                    summary={post.summary}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default BlogWidget;
