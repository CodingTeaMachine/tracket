export interface Repository<T, K> {
	create(data: K): Promise<T>

	all(pagination?: Pagination): Promise<Array<T>>

	findById(id: number): Promise<T>

	findWhere(params?: Partial<T>, pagination?: Pagination): Promise<Array<T>>

	update(params: Partial<K>): Promise<T>

	deleteById(id: number): Promise<void>
}

export interface Pagination {
	take?: number,
	skip?: number,
	page?: number
}
