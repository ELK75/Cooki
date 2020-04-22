import {
    Form,
    Select,
    InputNumber,
    Button,
    Input,
} from 'antd';

const { Option } = Select;

export default ({recipeSearch}) => {

    const onFinish = (values) => {
        let query = values.Query;
        let options = {
            intolerances: values.intolerances,
            maxReadyTime: values.minutes
        }
        recipeSearch(query, options);
    }

    return (
        <Form
            name="validate_other"
            onFinish={onFinish}
            style={{ width: '100%' }}
        >

            <div style={{ width: "75%", margin: "0 auto" }} >

                <Form.Item name="Query" rules={[{ required: true }]}>
                    <Input placeholder="Enter Search Query"/>
                </Form.Item>

                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-between" }}>
                    <Form.Item
                        name="intolerances"
                        label="Select Intolerances"
                        rules={[{ required: false, type: 'array' }]}
                    >
                        <Select mode="multiple" placeholder="Intolerances" style={{ minWidth: "20em", width: '30em', paddingRight: '5em' }}>
                            <Option value="dairy">Dairy</Option>
                            <Option value="egg">Egg</Option>
                            <Option value="gluten">Gluten</Option>
                            <Option value="grain">Grain</Option>
                            <Option value="peanut">Peanut</Option>
                            <Option value="seafood">Seafood</Option>
                            <Option value="sesame">Sesame</Option>
                            <Option value="shellfish">Shellfish</Option>
                            <Option value="soy">Soy</Option>
                            <Option value="sulfite">Sulfite</Option>
                            <Option value="tree Nut">Tree Nut</Option>
                            <Option value="wheat">Wheat</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="Enter Time to Prepare" style={{ minWidth: '20em', width: '30em' }}>
                        <Form.Item name="minutes" noStyle>
                            <InputNumber min={0} value={0} />
                        </Form.Item>
                        <span className="ant-form-text"> Max Amount of Minutes</span>
                    </Form.Item>
                </div>

                <Form.Item style={{ textAlign: "center", width: "100%" }}>
                    <Button type="primary" htmlType="submit" style={{ width: "30em" }}>
                        Search
                </Button>
                </Form.Item>

            </div>
        </Form>
    )
}