import create from 'zustand'

export const [useStore] = create((set, get) => ({
    userPosts: [],
    setUserPosts: (e) => {
        set({userPosts: e})

    },
    userPost: [],
    setUserPost: (e) => {
        set({userPost: e})

    },
    addComment: (json) => {
        const {userPost, setUserPost} = get();
        console.log(json, "add comment")
        console.log(userPost, "user Post comment");
        userPost.comments.push(json);
        set({
            userPost: userPost
        })
        console.log(userPost, "user post from store");
    },
}))
