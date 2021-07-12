import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Table = ({dataSource, columns, downloadable, HScroll, ...props }) => {
    const [filteredColumn, setFilteredColumn] = useState(columns);
    const [sortedDataSource, setSortedDataSource] = useState(dataSource);
    const [sortFor, setSortFor] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [searchableFields, setSearchableFields] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        let searchableArr = [];
        for(let i in columns){
            if(columns[i].searchable){
                searchableArr.push(columns[i].dataIndex)
            }
        }
        setSearchableFields(searchableArr);
    }, [columns, dataSource]);

    useEffect(() => {
        if(sortBy){
            sortDataSource();
        }
    }, [sortBy]);

    useEffect(() => {
        filterDataSource();
    }, [searchQuery])

    const filterDataSource = () => {
        if(searchQuery){
            let filteredDataSource = dataSource.filter((d) => {
                if(d.name.toLowerCase().includes(searchQuery)){
                    return 1
                } else {
                    return 0
                }
            });

            setSortedDataSource(filteredDataSource);
        } else {
            setSortedDataSource(dataSource);
        }
    }

    const setSortByFunc = () => {
        if(sortBy){
            if(sortBy === 'asc'){
                setSortBy('desc');
            } else {
                setSortBy('asc');
            }
        } else {
            setSortBy('asc');
        }
    }

    const sortDataSource = () => {
        let items = [...dataSource];
        if(typeof(items[0][sortFor]) === 'string'){
            items.sort(function(a, b) {
                var valueA = a[sortFor].toUpperCase();
                var valueB = b[sortFor].toUpperCase();
                if (valueA < valueB) {
                  return -1;
                }
                if (valueA > valueB) {
                  return 1;
                }
                return 0;
            });
        } else if(typeof(items[0][sortFor]) === 'number'){
            items.sort(function (a, b) {
                return a[sortFor] - b[sortFor];
            });
        }
        

        if(sortBy === 'asc'){
            setSortedDataSource(items);
        } else if(sortBy === 'desc'){
            setSortedDataSource(items.reverse());
        }
    }

    const renderSortIcon = (isSortFor) => {
        if(sortBy && isSortFor === sortFor){
            if(sortBy === 'asc'){
                return <SortIconSVG viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></g></SortIconSVG>
            } else {
                return <SortIconSVG viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></g></SortIconSVG>
            }
        }
        return null
    }

    const renderTableHead = () => {
        return filteredColumn.map((col) => {
            if(col.sortable){
                return(
                    <TheadTHSortable key={'th-'+col.key} className="sortable" onClick= {() => {setSortByFunc(); setSortFor(col.dataIndex)}}>
                        <span>{col.title}</span>
                        <SortIcon className="sort-icon">
                            {renderSortIcon(col.dataIndex)}
                        </SortIcon>
                        
                    </TheadTHSortable>
                )
            }
            return (
                <TheadTH key={'th-'+col.key}>{col.title}</TheadTH>
            )
        })
    }

    const renderTableData = () => {
        let rowData = []
        for(let i in sortedDataSource){
            let tdData = []
            for(let j in filteredColumn){
                let elem = <TBodyTD key={'td-'+sortedDataSource[i].key+filteredColumn[j].dataIndex}>{sortedDataSource[i][filteredColumn[j].dataIndex]}</TBodyTD>
                tdData.push(elem);
            }
            let rowElem = <TBodyTR key={'tr-'+sortedDataSource[i].key}>{tdData}</TBodyTR>
            rowData.push(rowElem);
        }

        return rowData
    }

    const renderDownloadable = () => {
        if(downloadable){
            return(
                <DownloadButton>
                    <DownloadButtonSVG width="18px" height="18px" viewBox="0 0 24 24" focusable="false" fill="#000000"><path d="M4 15h2v3h12v-3h2v3c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2m11.59-8.41L13 12.17V4h-2v8.17L8.41 9.59 7 11l5 5 5-5-1.41-1.41z"></path></DownloadButtonSVG>
                </DownloadButton>
            )
        }
        return null
    }

    return(
        <TableContainer HScroll={HScroll}>
            <TableActions HScroll={HScroll}>
                <TableActionsLeftContainer>
                    <InputBox>
                        <SearchInputIcon>
                            <SearchInputSVG viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
                                <g>
                                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                                </g>
                            </SearchInputSVG>
                        </SearchInputIcon>
                        <SearchInput type="text" placeholder={"Search through "+searchableFields.join(", ")} onChange={(e) => setSearchQuery(e.target.value)} />
                    </InputBox>
                </TableActionsLeftContainer>
                <TableActionsRightContainer>
                    {renderDownloadable()}
                    <SettingsButton>
                        <SettingsButtonSVG xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z"></path><circle cx="12" cy="12" r="3.5"></circle></SettingsButtonSVG>
                    </SettingsButton>
                </TableActionsRightContainer>
            </TableActions>
            <StyledTable>
                <Thead>
                    <TheadTR>
                        {renderTableHead()}
                    </TheadTR>
                </Thead>
                <TBody>
                    {renderTableData()}
                </TBody>
            </StyledTable>
        </TableContainer>
       
    )
};

const TableContainer = styled.div`
    display: flex;
    flex-direction: column;
    ${props => props.HScroll ? 'overflow-x: auto; white-space: nowrap; position: relative;' : ''}
`

const TableActions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${props => props.HScroll ? 'position: sticky; background-color: #fff;left: 0; right: 0;' : ''}
`

const TableActionsLeftContainer = styled.div``

const TableActionsRightContainer = styled.div`
    display: flex;
`

const SettingsButton = styled.button`
    width: 1.8rem;
    height: 1.8rem;
    padding: 0;
    margin: 0;
    background: transparent;
    cursor: pointer;
    border: 1px solid #EBECEC;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.5rem;
`

const SettingsButtonSVG = styled.svg`
    fill: #81868f;
`

const DownloadButton = styled.button`
    width: 1.8rem;
    height: 1.8rem;
    padding: 0;
    margin: 0;
    background: transparent;
    cursor: pointer;
    border: 1px solid #EBECEC;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.5rem;
`

const DownloadButtonSVG = styled.svg`
    fill: #81868f;
`

const InputBox = styled.div`
    border: 1px solid #EBECEC;
    border-radius: 4px;
    display: flex;
    overflow: hidden;
    padding: 0 0.4rem;
    height: 1.8rem;
    max-width: 15rem;
    min-width: 15rem;
`

const SearchInputIcon = styled.div`
    width: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.3rem;
`

const SearchInputSVG = styled.svg`
    fill: #81868f;
`

const SearchInput = styled.input`
    width: 100%;
    border: 0;
    outline: 0;
    color: #141D2E;
`

const StyledTable = styled.table``

const Thead = styled.thead``

const TheadTR = styled.tr`
    height: 2.5rem;
`

const TheadTH = styled.th`
    text-align: left;
    font-weight: 600;
    font-size: 0.9rem;
    padding: 0 0.5rem;
    &:last-child {
        background: linear-gradient(90deg,hsla(0,0%,100%,0),#fff 75%);
    }
`

const TheadTHSortable = styled(TheadTH)`
    cursor: pointer;
`

const SortIcon = styled.span`
    margin-left: 0.1rem;
`

const SortIconSVG = styled.svg`
    width: 1rem;
    vertical-align: middle;
`

const TBody = styled.tbody``

const TBodyTR = styled.tr`
    height: 2.5rem;
`

const TBodyTD = styled.td`
    border-top: 1px solid #EDF1F2;
    font-size: 0.9rem;
    padding: 0 0.5rem;
`

Table.propTypes = {
    /**
     * Datasource to be passed to the table
     */
    dataSource: PropTypes.array,
    /**
     * Columns of the tables
     */
    columns: PropTypes.array,
    /**
    * Is the table downloadable in excel format?
    */
    downloadable: PropTypes.bool,
    /**
    * Can the table scroll horizontally?
    */
    HScroll: PropTypes.bool,
};

Table.defaultProps = {
    dataSource: [
        {
        "id": 1,
        "name": "Carmine Queyos",
        "email": "cqueyosrwerwerwrkjhkjahkjashdjkhafhkjnckjnskjwicnwkjnckjnkn0@furl.net",
        "gender": "Female",
        "city": "La Tola",
        "address": "41 Waxwing Point",
        "company": "Pixonyx",
        "country": "Colombia",
        "key": 1
        }, {
        "id": 2,
        "name": "Rutherford Thewys",
        "email": "rthewys1@about.me",
        "gender": "Agender",
        "city": "Krajan",
        "address": "71 Thompson Pass",
        "company": "Youfeed",
        "country": "Indonesia",
        "key": 2
        }, {
        "id": 3,
        "name": "Brook Kemme",
        "email": "bkemme2@shop-pro.jp",
        "gender": "Non-binary",
        "city": "Takefu",
        "address": "80223 Arkansas Drive",
        "company": "Jaxspan",
        "country": "Japan",
        "key": 3
        }, {
        "id": 4,
        "name": "Cecilius Wishkar",
        "email": "cwishkar3@mac.com",
        "gender": "Genderqueer",
        "city": "Vizal San Pablo",
        "address": "157 Cambridge Pass",
        "company": "Flipopia",
        "country": "Philippines",
        "key": 4
        }, {
        "id": 5,
        "name": "Cori Goacher",
        "email": "cgoacher4@mit.edu",
        "gender": "Polygender",
        "city": "Panyingkiran",
        "address": "08 Forest Dale Place",
        "company": "Youfeed",
        "country": "Indonesia",
        "key": 5
        }
    ],
    columns: [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            sortable: true,
            align: 'left'
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sortable: true,
            searchable: true
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            sortable: true
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
            sortable: true
        },
        {
            title: 'City',
            dataIndex: 'city',
            key: 'city',
            sortable: true,
            searchable: true
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Company',
            dataIndex: 'company',
            key: 'company',
            sortable: true
        },
        {
            title: 'Country',
            dataIndex: 'country',
            key: 'country',
            sortable: true
        },
    ],
    downloadable: false,
    HScroll: false
};