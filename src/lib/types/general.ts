export interface ApiResponse<T> {
  status: number;
  message: string;
  statusCode: number;
  success: boolean;
  data: T;
}

export interface ListPaginationModel {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
}
