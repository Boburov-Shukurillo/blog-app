import { Injectable } from '@nestjs/common';
import { BlogDto } from './dto/blog.dto';
import { Blog } from './blog.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BlogService {
  constructor(@InjectModel(Blog.name) private blogModel: Model<Blog>) { }

  async getBlogs() {
    return this.blogModel.find()
  }

  async create(dto: BlogDto) {
    return this.blogModel.create(dto);
  }

  async getOne(id: number) {
    return this.blogModel.findById(id);
  }

  async delete(id: string) {
    return this.blogModel.findByIdAndDelete(id);
  }

  async update(id: string, dto: BlogDto) {
    this.blogModel.findByIdAndUpdate(id, dto, { new: true })
  }
}