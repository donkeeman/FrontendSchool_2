function BlogDetailPage({match}) {
    return (
        // fetch처럼 get요청을 할 수 있는 코드를 작성해주면 됨
        <div>
            <h1>Blog Detail Page</h1>
            <p>{match.params.id}번 게시물이 로드되었습니다.</p>
        </div>
    )
}

export default BlogDetailPage;