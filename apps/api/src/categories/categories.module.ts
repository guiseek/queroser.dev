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
          // const schema = CategorySchema
          CategorySchema.pre('save', function () {
            this.slug = slugify(this.name)
          })
          return CategorySchema
        },
      },
    ]),
    // MongooseModule.forFeature([{name: Category.name, schema: CategorySchema}]),
  ],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
