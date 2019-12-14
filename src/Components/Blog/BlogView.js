import React from 'react';
// import { Link, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import useBlog from 'Utils/useBlog';

const BlogView = ({ id }) => {
    const data = useBlog('GET', id);
    if (!data) {
        // TODO: redirect back to /blog
        return <h1 className="title">Error: Post Not Found</h1>;
    }

    return (
        <>
            <Link to="/blog">
                <div className="level">
                    <div className="level-left">
                        <div className="level-item">
                            <span className="icon is-large has-text-dark">
                                <i className="fas fa-2x fa-arrow-left"></i>
                            </span>
                            <h2 className="title">Terug</h2>
                        </div>
                    </div>
                </div>
            </Link>
            <hr />
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">{data.title}</h1>
                        <h2 className="subtitle">
                            Posted on: {data.created_on}
                        </h2>
                    </div>
                </div>
            </section>
            <section className="section">
                <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
            </section>
        </>
    );
};

BlogView.propTypes = {
    id: PropTypes.string.isRequired
};

export default BlogView;
