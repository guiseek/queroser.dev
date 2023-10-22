import {Module} from '@nestjs/common'
import {MongooseModule} from '@nestjs/mongoose'
import {CategoriesController} from './categories.controller'
import {CategoriesService} from './categories.service'
import {Category, CategorySchema} from './category.schema'
import {slugify} from '@queroser.dev/shared/util-model'

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Category.name,
        useFactory: () => {
          const schema = CategorySchema
          schema.pre('save', function () {
            this.slug = slugify(this.name)
            console.log(this)
            console.log(this.slug)
          })
          return schema
        },
      },
    ]),
    // MongooseModule.forFeature([{name: Category.name, schema: CategorySchema}]),
  ],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
