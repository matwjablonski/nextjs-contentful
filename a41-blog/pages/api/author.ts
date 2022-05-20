const author = (req, res) => {
    res.status(200).json({
        name: 'Mateusz',
        description: 'Taki sobie gość'
    })
};
  
export default author;