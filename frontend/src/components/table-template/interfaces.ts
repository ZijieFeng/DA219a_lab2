export interface IBodyCellComponentProps {
  row: {}
}
export interface IBodyCellProps {
  children: any
  className?: string
  onClick?: () => void
}

export interface IBodyRowProps {
  children: any
  className?: string
  hover?: boolean
}

export interface IBodyRowTemplateProps {
  className?: string
  columns: IColumn[]
  row: {
    [key: string]: any
  }
}

export interface IColumn {
  key: string
  sortable: boolean
  title: string
  BodyCellComponent?: (props: IBodyCellComponentProps) => any
  placeholder?: string
}

export interface IHeaderCellProps {
  children: any
  className?: string
}

export interface IHeaderRowProps {
  children: any
  className?: string
}

export interface IHeaderRowTemplateProps {
  className?: string
  columns: IColumn[]
  handleSort: (key: string, order: 'ASC' | 'DESC') => void
  sortOrder: 'ASC' | 'DESC'
  sortBy: string | any
}

export interface IHeaderCellSortableProps {
  active?: boolean
  children: any
  className?: string
  handleSort?: (order: 'ASC' | 'DESC') => void
  sortOrder: 'ASC' | 'DESC'
}

export interface ILoadingRowTemplateProps {
  className?: string
  columns: IColumn[]
  loading?: boolean
}

export interface ITableTemplateProps {
  collection?: object[]
  columns?: IColumn[]
  handlePageChange?: (page: number) => void
  handleRowsPerPageChange?: (rows: number) => void
  handleSort?: (key: string, order: 'ASC' | 'DESC') => void
  loading?: boolean
  page?: number
  pagination?: boolean
  rowsPerPage?: number
  rowsPerPageOptions?: number[]
  rowsTotal?: number
  showEmptyRows?: boolean
  sortBy?: string | any
  sortOrder?: 'ASC' | 'DESC' | any
  BodyRowTemplate?: (props: IBodyRowTemplateProps) => any
  EmptyTemplate?: (props: any) => any
  HeaderRowTemplate?: (props: IHeaderRowTemplateProps) => any
  LoadingRowTemplate?: (props: any) => any
  LoadingTemplate?: (props: any) => any
}
