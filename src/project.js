import { Table, Avatar,Image,Badge,Checkbox,Tag,Button,Space,Select,AutoComplete} from 'antd';
import { ProfileFilled } from '@ant-design/icons';
import { useState } from 'react';

const value = (str, repeat = 1) => ({
    value: str.repeat(repeat),
});

const columns = [
    {
        title:'CHECKBOX',
        dataIndex:'checkbox',
        
        render: (value) => {
            return (
                <Checkbox></Checkbox>  
            );
        }, 
        colSpan: 1,
    }, 

    {
        title:'#',
        dataIndex:'sno',
        align: "left",
        sorter: (a, b) => a.sno - b.sno,
    },
{
    title: 'PROJECT NAME',
    dataIndex: 'projectname',
    sorter: (a, b) => a.projectname - b.projectname,
    },
    
{
    title: 'PM',
    dataIndex: 'pm',
    sorter: (a, b) => a.pm - b.pm,
    render: () => {
        return (
        <Avatar shape="square" size="small" icon={<Image
            width={20}
            src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"></Image>}>    
            </Avatar>
        );
    },
},

{
    title: 'STATUS',
    dataIndex: 'status',
    sorter: (a, b) => a.status - b.status,
    render:(value)=>{
        return(
            <Badge color="green" text="on track"/>
            
        )
    },
    },
{
    title: 'LAST UPDATE',
    dataIndex: 'lastupdate',
    sorter: (a, b) => a.lastupdate - b.lastupdate,
    },

    

{
    title: 'RESOURCES',
    dataIndex: 'resources',
    sorter: (a, b) => a.resources - b.resources,
    render:(resources)=>{
        return(
            <Tag color="#808080" key={resources}>
            {resources}
        </Tag>
        )
    },
    
},

{
    title: 'PROJECT TIMELINE',
    dataIndex: 'projecttimeline',
    sorter: (a, b) => a.projecttimeline - b.projecttimeline,
    render:(projecttimeline)=>{
        return(
            <Tag color="#808080" key={projecttimeline}>
            {projecttimeline}
        </Tag>
        )
    },
},

{
    title: 'ESTIMATION',
    dataIndex: 'estimation',
    sorter: (a, b) => a.estimation - b.estimation,
},

];

const data = [
{
    key: '1',
    sno: 1,
    projectname: 'Allosaurus web app',
    lastupdate:'15 MAR 2021, 12.47 PM' ,
    resources:['3'],
    projecttimeline:'15 May 2021 > 15 Aug 2021',
    estimation:'US$ 10.5K',

},
{
    key: '2',
    sno: 2,
    projectname: 'MicroRaptor website',
    lastupdate:'15 MAR 2021, 12.47 PM' ,
    resources:['3'],
    projecttimeline:'15 May 2021 > 15 Aug 2021',
    estimation:'US$ 10.5K',

},
{
    key: '3',
    sno: 3,
    projectname: 'Tarius landing page',
    status: 'ON TRACK',
    lastupdate:'15 MAR 2021, 12.47 PM' ,
    resources:['+'],
    projecttimeline:'_______________________________',
    estimation:'US$ 10.5K',
},
{
    key: '4',
    sno: 4,
    projectname: 'Rugops App',
    status: 'ON TRACK',
    lastupdate:'15 MAR 2021, 12.47 PM' ,
    resources:'3',
    projecttimeline:'15 May 2021 > 15 Aug 2021',
    estimation:'US$ 10.5K',
},
{
    key: '5',
    sno: 5,
    projectname: 'Erketu',
    status: 'ON TRACK',
    lastupdate:'15 MAR 2021, 12.47 PM' ,
    resources:'3',
    projecttimeline:'15 May 2021 > 15 Aug 2021',
    estimation:'US$ 10.5K',
},
{
    key: '6',
    sno: 6,
    projectname: 'Capricon',
    status: 'ON TRACK',
    lastupdate:'15 MAR 2021, 12.47 PM' ,
    resources:'3',
    projecttimeline:'15 May 2021 > 15 Aug 2021',
    estimation:'US$ 10.5K',
},
{
    key: '7',
    sno: 7,
    projectname: 'Sagittarius',
    status: 'ON TRACK',
    lastupdate:'15 MAR 2021, 12.47 PM' ,
    resources:['+'],
    projecttimeline:'15 May 2021 > 15 Aug 2021',
    estimation:'US$ 10.5K',
},
{
    key: '8',
    sno: 8,
    projectname: 'Gemini',
    status: 'ON TRACK',
    lastupdate:'15 MAR 2021, 12.47 PM' ,
    resources:'3',
    projecttimeline:'15 May 2021 > 15 Aug 2021',
    estimation:'US$ 10.5K',
},
{
    key: '9',
    sno: 9,
    projectname: 'Pisces',
    status: 'ON TRACK',
    lastupdate:'15 MAR 2021, 12.47 PM' ,
    resources:'3',
    projecttimeline:'15 May 2021 > 15 Aug 2021',
    estimation:'US$ 10.5K',
},
{
    key: '10',
    sno: 10,
    projectname: 'Taurus',
    status: 'ON TRACK',
    lastupdate:'15 MAR 2021, 12.47 PM' ,
    resources:'3',
    projecttimeline:'15 May 2021 > 15 Aug 2021',
    estimation:'US$ 10.5K',
},
{
    key: '11',
    sno: 11,
    projectname: 'Osiris',
    status: 'ON TRACK',
    lastupdate:'15 MAR 2021, 12.47 PM' ,
    resources:'3',
    projecttimeline:'15 May 2021 > 15 Aug 2021',
    estimation:'US$ 10.5K',
},
{
    key: '12',
    sno: 12,
    projectname: 'Horous',
    status: 'ON TRACK',
    lastupdate:'15 MAR 2021, 12.47 PM' ,
    resources:'3',
    projecttimeline:'15 May 2021 > 15 Aug 2021',
    estimation:'US$ 10.5K',
},
{
    key: '13',
    sno: 13,
    projectname: 'Hathor',
    status: 'ON TRACK',
    lastupdate:'15 MAR 2021, 12.47 PM' ,
    resources:'3',
    projecttimeline:'15 May 2021 > 15 Aug 2021',
    estimation:'US$ 10.5K',
},
];

const Project = () => {

const [options, setOptions] = useState([]);
const getPanelValue = (searchText) =>
    !searchText ? [] : [value(searchText)];
const onSelect = (data) => {
    console.log('onSelect', data);
};

    return (
    <>
        <Space
        style={{
            marginBottom: 16,
        }}
        >
        <Button size="small" style={{marginLeft:"10px",marginTop:"5px"}}><ProfileFilled/></Button>
        <Select
    defaultValue="All"
    options={[
        {
        value: 'Allosaurus web app',
        label: 'Allosaurus web app',
        },
        {
        value: 'MicroRaptor website',
        label: 'MicroRaptor website',
        },
        {
        value: 'Tarius landing page',
        label: 'Tarius landing page',
        },
        {
        value: 'Rugops App',
        label: 'Rugops App',
        },
        {
            value: 'Erketu',
            label: 'Erketu',
            },
    ]}
    style={{
        width:120,
        marginTop: 12,
    }}>
    </Select>

    <AutoComplete
        options={options}
        style={{
        width: 200,
        marginTop: 12,

        }}
        onSelect={onSelect}
        onSearch={(text) => setOptions(getPanelValue(text))}
        placeholder="Search"
    />

        <Button className='button'>+ New Project</Button>
        </Space>
        <Table columns={columns} dataSource={data} pagination={{
                    showSizeChanger: true,
                    size: "default",
                }}/>
    </>
    );
}


export default Project;