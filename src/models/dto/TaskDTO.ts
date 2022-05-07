export interface BaseTaskDTO{
    id?: number
    title: string
    description: string
    state: string
    endDate: string
}

export interface TaskDTO extends BaseTaskDTO{
    id: number
    userId: number | null
}

export interface CreateTaskDTO extends BaseTaskDTO{}

export interface UpdateTaskDTO extends Partial<BaseTaskDTO>{}
