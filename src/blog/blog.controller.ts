import { Body, Controller, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { BlogDto } from './dto/blog.dto';

@Controller('blog')
export class BlogController {

    blogs: BlogDto[]

    constructor() {
        this.blogs = [
            {
                id: 1,
                title: 'Blog 1',
                excerpt: 'Excerpt 1',
                description: 'Description 1'
            },
            {
                id: 2,
                title: 'Blog 2',
                excerpt: 'Excerpt 2',
                description: 'Description 2'
            },
            {
                id: 3,
                title: 'Blog 3',
                excerpt: 'Excerpt 3',
                description: 'Description 3'
            }
        ]
    }

    @HttpCode(200)
    @Get('/all')
    async getAll() {
        return this.blogs
    }

    @HttpCode(201)
    @Post('/create')
    async create(@Body() dto: BlogDto) {
        const data: BlogDto = {
            id: this.blogs.length + 1,
            title: dto.title,
            excerpt: dto.excerpt,
            description: dto.description
        }

        return this.blogs.push(data)
    }

    @HttpCode(200)
    @Get('/one/:id')
    async getOne(@Param('id') id: number) {
        return this.blogs.find((item) => item.id === Number(id))
    }

    @HttpCode(200)
    @Get('/delete/:id')
    async delete(@Param('id') id: number) {
        const index = this.blogs.findIndex((item) => item.id === Number(id))

        if (index !== -1) {
            this.blogs.splice(index, 1)
            return { message: 'Blog deleted successfully' }
        } else {
            return { message: 'Blog not found' }
        }
    }

    @HttpCode(200)
    @Put('/update/:id')
    async update(@Param('id') id: number, @Body() dto: BlogDto) {
        const index = this.blogs.findIndex((item) => item.id === Number(id))

        if (index !== -1) {
            this.blogs[index] = { ...this.blogs[index], ...dto }
            return { message: 'Blog updated successfully' }
        } else {
            return { message: 'Blog not found' }
        }
    }

}
