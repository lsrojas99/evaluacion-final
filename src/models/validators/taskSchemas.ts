import Joi from 'joi'
import { CreateTaskDTO, UpdateTaskDTO } from '../dto/TaskDTO'

export const createTaskSchema: Joi.ObjectSchema<CreateTaskDTO> = Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    state: Joi.string().required(),
    endDate: Joi.string().required(),
})

export const updateTaskSchema: Joi.ObjectSchema<UpdateTaskDTO> = Joi.object().keys({
    title: Joi.string(),
    description: Joi.string(),
    state: Joi.string(),
    endDate: Joi.string()
})


