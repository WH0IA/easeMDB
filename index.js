const mongoose = require('mongoose')

class EaseMDB{

  constructor(url){
    this.url = url
  }

  async writeNewElem(model , object){
    try{
      await mongoose.connect(this.url)
      await model.create(object)
      await mongoose.disconnect()
      return {status:'OK' , object}
    }catch(err){
      return err
    }
  }

  async getAllElems(model){
    try{
      await mongoose.connect(this.url)
      const elems = await model.find({})
      await mongoose.disconnect()
      return elems
    }catch(err){
      return err
    }
  }

  async deleteMany(model , object = {}){
    try{
      await mongoose.connect(this.url)
      const info = await model.deleteMany(object)
      await mongoose.disconnect()
      return info
    }catch(err){
      return err
    }
  }

  async deleteOne(model , object){
    try{
      await mongoose.connect(this.url)
      const info = await model.deleteOne(object)
      await mongoose.disconnect()
      return info
    }catch(err){
      return err
    }
  }

  async updateOne(model , searchObject , updateObject){
    try{
      await mongoose.connect(this.url)
      const info = await model.updateOne(searchObject,updateObject)
      await mongoose.disconnect()
      return info
    }catch(err){
      return err
    }
  }

  async updateMany(model , searchObject = {} , updateObject){
    try{
      await mongoose.connect(this.url)
      const info = await model.updateMany(searchObject,updateObject)
      await mongoose.disconnect()
      return info
    }catch(err){
      return err
    }
  }
}

module.exports = EaseMDB
