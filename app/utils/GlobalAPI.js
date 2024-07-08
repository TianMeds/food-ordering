const MASTER_URL=process.env.NEXT_PUBLIC_BACKEND_URL;
import { gql, request } from 'graphql-request'

const addToCart = async(data)=> {
    const query=gql`
    mutation MyMutation {
        createUserCart(
            data: {email: "`+data?.email+`", price: `+data.price+`, productDescription: "`+data.description+`", productImage: "`+data.productImage+`", productName: "`+data.name+`"}
        ) {
            id
        }
        publishManyUserCarts(to: PUBLISHED) {
            count
        }
    }
    `
    const result = await request(MASTER_URL,query);
    return result;
}

const getUserCart = async( userEmail ) => {
    const query=gql`
    query GetUserCart {
        userCarts(where: {email: "`+userEmail+`"}) {
            id
            price
            productDescription
            productImage
            productName
        }
    }
    `
    const result = await request(MASTER_URL,query);
    return result;
}
    const DeleteItemFromCart = async (id) => {
        const query=gql`
        mutation DeleteItemFromCart {
            deleteUserCart(where: {id: "`+id+`"}) {
                id
            }
        }
        `
        const result = await request(MASTER_URL,query);
        return result;
    }

    const CreateNewOrder  = async (data) => {
        const query =gql`
        mutation CreateNewOrder {
            createOrder(
                data: {email: "`+data.email+`", 
                orderAmount: `+data.orderAmount+`, 
                username: "`+data.userName+`", 
                phone: "`+data.phone+`"
            }) {
                id
            }
        }
        `

        const result =  await request(MASTER_URL,query);
        return result;
    }


    const UpdateOrderDetail= async (name, price, id, email) => {
        const query = gql`
        mutation UpdateOrderDetail {
            updateOrder(
                data: {orderDetail: {create: {OrderItem: {data: {name: "`+name+`", price: `+price+`}}}}}
                where: {id: "`+id+`"}
            ) {
                id
            }
            publishManyOrders(to: PUBLISHED) {
                count
            }
                deleteManyUserCarts(where: {email: "`+email+`"}) {
                  count
                }
              
        }
        `

        const result =  await request(MASTER_URL,query);
        return result;
    }

export default{
    addToCart,
    getUserCart,
    DeleteItemFromCart,
    CreateNewOrder,
    UpdateOrderDetail
}