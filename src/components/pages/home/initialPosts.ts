import {v4 as uuidv4} from "uuid";
import {PostType} from "../../../types";

export const initialPosts: PostType[] = [{
    author: {
        _id: uuidv4(),
        avatar: 'https://image.isu.pub/190610194240-bf6690bf4df411a94fd5d160e20fb989/jpg/page_1_thumb_large.jpg',
        name: 'BBC'
    },
    createdAt: 'minute ago',
    content: 'Островное государство, расположенное на западе Северной Европы в северной части Атлантического океана, на севере и северо-востоке омывается Северным Ледовитым океаном. Территория государства состоит из одноимённого острова площадью 103 тыс. км² и небольших островков около него.',
    images: [
        'https://fb.ru/media/i/1/4/2/0/9/6/7/i/1420967.jpg',
        'https://journalistontherun.com/wp-content/uploads/2018/04/haifoss.jpg',
        'https://www.cashadvance6online.com/data/archive/img/3912590192.jpeg',
        'https://7themes.su/php/imres/resize.php?width=960&height=640&cropratio=3:2&image=/_ph/55/966413306.jpg'
    ],
}]