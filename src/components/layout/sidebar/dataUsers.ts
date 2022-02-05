import {UserType} from "../../../types";
import {v4 as uuidv4} from "uuid";

export const users: UserType[] = [
    {
        _id: uuidv4(),
        avatar:
            'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1843',
        name: 'Петр Лялин',
        isInNetwork: true,
    },
    {
        _id: uuidv4(),
        avatar:
            'https://img.etimg.com/thumb/width-640,height-480,imgsize-144736,resizemode-1,msid-69037337/small-biz/startups/newsbuzz/fraud-is-only-possible-if-user-grants-access-oldrich-mller-coo-anydesk/oldrich-muller.jpg',
        name: 'Иван Часов',
        isInNetwork: true,
    },
    {
        _id: uuidv4(),
        avatar:
            'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png',
        name: 'Максим Гудков',
        isInNetwork: false,
    },
    {
        _id: uuidv4(),
        avatar:
            'https://dwpdigital.blog.gov.uk/wp-content/uploads/sites/197/2016/07/P1090594-1.jpeg',
        name: 'Мария Желева',
        isInNetwork: true,
    },
]