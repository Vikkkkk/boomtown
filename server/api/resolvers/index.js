const { ApolloError } = require('apollo-server')
const jwt = require('jsonwebtoken')
const authMutations = require('./auth')
const { UploadScalar, DateScalar } = require('../custom-types')

module.exports = function(app) {
  return {
    Upload: UploadScalar,
    Query: {
      viewer(parent, viewer, context, info) {
        if (context.token) {
          return jwt.decode(context.token, app.get('JWT_SECRET'))
        }
        return null
      },
      async user(parent, { id }, { pgResource }, info) {
        try {
          const user = await pgResource.getUserById(id)
          return user
        } catch (e) {
          throw new ApolloError(e)
        }
      },
      async items(parent, { filter }, { pgResource }, info) {
        try {
          const items = await pgResource.getItems(filter)
          return items
        } catch (e) {
          throw new ApolloError(e)
        }
        // -------------------------------
      },
      async tags(parent, args, { pgResource }, info) {
        try {
          const tags = await pgResource.getTags()
          return tags
        } catch (e) {
          throw new ApolloError(e)
        }
      }
    },
    User: {
      async items(parent, vars, { pgResource }, info) {
        try {
          const items = await pgResource.getItemsForUser(parent.id)
          return items
        } catch (e) {
          throw new ApolloError(e)
        }
      },
      async borrowed(parent, vars, { pgResource }, info) {
        try {
          const itemsBorrowed = await pgResource.getBorrowedItemsForUser(
            parent.id
          )
          return itemsBorrowed
        } catch (e) {
          throw new ApolloError(e)
        }
      }
    },
    Item: {
      async itemowner(parent, vars, { pgResource }, info) {
        try {
          const itemOwner = await pgResource.getUserById(parent.ownerid)
          return itemOwner
        } catch (err) {
          throw new ApolloError(err)
        }
      },
      async tags(parent, vars, { pgResource }, info) {
        try {
          const tagsForItem = await pgResource.getTagsForItem(parent.id)
          return tagsForItem
        } catch (e) {
          throw new ApolloError(e)
        }
      },
      async borrower(parent, vars, { pgResource }, info) {
        try {
          const borrower = await pgResource.getUserById(parent.borrowerid)
          return borrower
        } catch (err) {
          throw new ApolloError(err)
        }
      }
    }, //     return `data:${mimetype};base64, ${data}` //   if (imageid) { //   if (imageurl) return imageurl // async imageurl({ imageurl, imageid, mimetype, data }) {
    //   }
    // }
    // -------------------------------
    Mutation: {
      // @TODO: Uncomment this later when we add auth
      ...authMutations(app), // -------------------------------

      async addItem(parent, args, context, info) {
        const image = await args.image
        const user = await jwt.decode(context.token, app.get('JWT_SECRET'))
        const newItem = await context.pgResource.saveNewItem({
          item: args.item,
          image: image,
          user
        })
        return newItem
      }
    }
  }
}
