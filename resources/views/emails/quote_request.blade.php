<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>New Quote Request</title>
</head>
<body>
    <h1>New Quote Request Received</h1>
    <p><strong>Full Name:</strong> {{ $data['full_name'] }}</p>
    <p><strong>Email:</strong> {{ $data['email']  }}</p>
    <p><strong>Phone:</strong> {{ $data['phone'] ?? 'N/A' }}</p>
    <p><strong>Industry/Business:</strong> {{ $data['industry_or_buisness'] ?? 'N/A' }}</p>
    <p><strong>Organization Type:</strong> {{ $data['organization_type'] ?? 'N/A' }}</p>
    <p><strong>Primary Goal of Project:</strong> {{ $data['primary_goal_of_project'] ?? 'N/A' }}</p>
    <p><strong>Links:</strong> {{ $data['links'] ?? 'N/A' }}</p>
    <p><strong>Budget:</strong> {{ $data['budget'] ?? 'N/A' }}</p>
    <p><strong>Number of Pages:</strong> {{ $data['number_of_pages'] ?? 'N/A' }}</p>
    <p><strong>Brief of Requirements:</strong> {{ $data['brief_of_requirements'] ?? 'N/A' }}</p>
    <p><strong>Relevant File:</strong> {{ $data['relevant_file'] ?? 'N/A' }}</p>
</body>
</html>
