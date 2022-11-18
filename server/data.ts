export interface Post {
  _id: string // post id
  author_id : string
  post_title: string,
  post_content: string 
  timeStamp: Date
  // status: "draft" | "sent" | "deleted" // post status
  comment: Comment[] // comment
  upvote: number // upvote number, default 0.
  downvote: number // downvote number, default 0.
}

export interface Comment {
  _id: string
  // name: string
  comment_content: string 
  timeStamp: Date
  // status: "draft" | "sent" | "deleted"
  // comment: string[]
  upvote: number
  downvote: number
}

export interface User {
  _id: string // user id
  name: string // user name
}