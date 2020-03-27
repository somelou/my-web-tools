export interface JikePostPojo {
    id: string;
    type: string;
    content: string; // 动态内容
    urlsInText: Array<string>;
    likeCount: number;
    commentCount: number;
    repostCount: number;
    shareCount: number;
    topic: JikeTopicPojo; // 动态圈子
    pictures: JikeImagePojo[];
    user: JikeUserPojo; // 发布者
    createdAt: string; // 创建时间
}

interface JikeTopicPojo {
    id: string;
    content: string; // 圈子名
}

interface JikeUserPojo {
    id: string;
    username: string;
    screenName: string; // 发布者昵称
    createdAt: string;
    updatedAt: string;
    avatarImage: JikeImagePojo; // 头像
}

interface JikeImagePojo {
    picUrl: string;
    format?: string;
}
