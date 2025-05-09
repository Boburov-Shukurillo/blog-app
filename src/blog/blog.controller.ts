import { Body, Controller, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { BlogDto } from './dto/blog.dto';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
    constructor(private readonly blogService: BlogService) { }

    @HttpCode(200)
    @Get('/all')
    async getAll() {
        return this.blogService.getBlogs()
    }

    @HttpCode(201)
    @Post('/create')
    async create(@Body() dto: BlogDto) {
        return this.blogService.create(dto)
    }

    @HttpCode(200)
    @Get('/one/:id')
    async getOne(@Param('id') id: number) {
        return this.blogService.getOne(id)
    }

    @HttpCode(200)
    @Get('/delete/:id')
    async delete(@Param('id') id: string) {
        return this.blogService.delete(id)
    }

    @HttpCode(200)
    @Put('/update/:id')
    async update(@Param('id') id: string, @Body() dto: BlogDto) {
        return this.blogService.update(id, dto)
    }

}
